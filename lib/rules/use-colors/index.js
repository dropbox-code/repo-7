const stylelint = require('stylelint');
const _ = require('lodash');
const tinycolor = require('tinycolor2');

const { tokensByCategory } = require('../../utils/token-utils');

const COLOR_ALLOWLIST = ['transparent'];
const COLOR_PROPS = ['color', 'backgroundColor'];

// Workaround so that Gradient token does not get provided over Sky Blue
const COLORS = tokensByCategory('colors').filter(
  el => el.name !== '$bpk-color-primary-gradient-light',
);

const ruleName = 'backpack/use-colors';

const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: selector => `Use the following Backpack token instead: ${selector}`,
});

const rule = primaryOption => {
  return (postcssRoot, postcssResult) => {
    // If rule is disabled then we don't run the rule
    if (!primaryOption) {
      return;
    }

    postcssRoot.walkDecls(decl => {
      const { prop, value } = decl;

      // Return early if decl is not a colour to avoid needlessly parsing
      if (!COLOR_PROPS.includes(prop)) return;

      // If a Backpack color is already in use then we don't need to process further
      if (COLORS.filter(color => color.name === value)[0]) return;

      // Return if the color is in the allowed values list
      if (COLOR_ALLOWLIST.filter(color => value === color).length) return;

      // Extract the color rgb string and check if it exists as a Backpack color
      const color = tinycolor(value);
      const expectedToken = _.find(COLORS, { value: color.toRgbString() });
      let message;

      // If we find a color match then we give a token to use
      // otherwise we don't have a match and tell users to use a Backpack token
      if (expectedToken) {
        message = messages.expected(expectedToken.name);
      } else {
        message = `Unknown color, use a Backpack token instead`;
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
