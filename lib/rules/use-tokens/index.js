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

const { ALLOWED_PROPS } = require('../../utils/token-props');

const {
  isLengthProp,
  isBpkToken,
  isAllowedValue,
  isAllowedUnit,
  checkValue,
} = require('./utils');

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
    const validOptions = stylelint.utils.validateOptions(
      postcssResult,
      ruleName,
      {
        actual: primaryOption,
        possible: true,
      },
    );

    if (!validOptions) {
      return;
    }

    postcssRoot.walkDecls(decl => {
      const { prop, value } = decl;

      let message;

      // Return early if css identifier is not a size to avoid needlessly parsing
      if (!isLengthProp(prop)) return;

      if (ALLOWED_PROPS.includes(prop)) return;

      // Parse the values so we can test
      const root = parse(value, { ignoreUnknownWords: true });

      root.nodes.forEach(element => {
        // If allowed value or unit or Backpack token is used then we return
        if (
          isBpkToken(element.value) ||
          isAllowedValue(element.value) ||
          isAllowedUnit(element.unit)
        )
          return;

        // If its a word and the value does not match expected values we report and error
        if (element.type === 'word' && !checkValue(element.value)) {
          message = messages.expected(prop, element.type);
        } else if (element.type === 'numeric') {
          message = messages.expected(prop, element.type);
        } else {
          return;
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
    });
  };
};

module.exports = stylelint.createPlugin(ruleName, rule);
