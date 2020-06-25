/*
 Copyright 2020 Skyscanner
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

const stylelint = require('stylelint');
const { parse } = require('postcss-values-parser');

const {
  RADII_PROPS,
  BORDER_PROPS,
  SPACING_PROPS,
} = require('../../utils/token-props');
const { tokensByCategory } = require('../../utils/token-utils');

const SPACING_NAMES = new Set(tokensByCategory('spacings').map(x => x.name));
const RADII_NAMES = new Set(tokensByCategory('radii').map(x => x.name));
const BORDER_NAMES = new Set(tokensByCategory('borders').map(x => x.name));

const ruleName = 'backpack/use-tokens';

const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: (selector, type) => {
    if (type === 'word') {
      return `Please ensure you are using Backpack tokens for \`${selector}\``;
    }
    return `Don't use raw numbers for \`${selector}\` instead use a Backpack token or multiples of a token`;
  },
});

const rule = primaryOption => {
  return (postcssRoot, postcssResult) => {
    // If rule is disabled then we don't run the rule
    if (!primaryOption) {
      return;
    }

    postcssRoot.walkDecls(decl => {
      const { prop, value } = decl;

      let message;
      const isLengthProp =
        SPACING_PROPS.includes(prop) ||
        RADII_PROPS.includes(prop) ||
        BORDER_PROPS.includes(prop);

      const isBpkToken =
        SPACING_NAMES.has(value) ||
        RADII_NAMES.has(value) ||
        BORDER_NAMES.has(value);

      // Return early if css identifier is not a size to avoid needlessly parsing
      if (!isLengthProp) return;

      // Parse the values so we can test
      const root = parse(value, { ignoreUnknownWords: true });

      // Check in instance of no mathematical operations
      if (root.nodes.length === 1) {
        // If its a Backpack token then we return as all is well
        if (root.nodes[0].type === 'word' && !isBpkToken) {
          message = messages.expected(prop, root.nodes[0].type);
        } else if (root.nodes[0].type === 'numeric') {
          message = messages.expected(prop, root.nodes[0].type);
        } else {
          return;
        }
      }

      // Report back the violation
      stylelint.utils.report({
        ruleName,
        result: postcssResult,
        message,
        node: decl,
        word: value,
      });
    });
  };
};

module.exports = stylelint.createPlugin(ruleName, rule);
