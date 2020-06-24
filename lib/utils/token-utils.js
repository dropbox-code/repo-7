const _ = require('lodash');
const { props: WEB_TOKENS } = require('bpk-tokens/tokens/base.raw.json');

const TOKENS = _.mapKeys(WEB_TOKENS, (value, key) => `${key}`);

module.exports.tokensByCategory = category =>
  _.chain(TOKENS)
    .filter({ category })
    .map(({ name, value }) => ({
      name: `$bpk-${_.kebabCase(name)}`,
      value,
    }))
    .value();
