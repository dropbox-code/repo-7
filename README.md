# stylelint-plugin-backpack

[![Build Status](https://github.com/Skyscanner/stylelint-plugin-backpack/workflows/CI/badge.svg?branch=master)](https://github.com/Skyscanner/stylelint-plugin-backpack/actions?query=workflow%3ACI)
[![npm version](https://img.shields.io/npm/v/@skyscanner/stylelint-plugin-backpack.svg)](https://www.npmjs.com/package/@skyscanner/stylelint-plugin-backpack)

Stylelint plugin to prevent magic arbitrary values and promote the use of Backpack tokens.

## Installation

```
npm install @skyscanner/stylelint-plugin-backpack --save-dev
```

## Usage

Add `@skyscanner/stylelint-plugin-backpack` to your stylelint config plugins array, 

```
{
  "plugins": ["@skyscanner/stylelint-plugin-backpack"]
}
```

Then add rules you need to the rules list. All rules from `@skyscanner/stylelint-plugin-backpack` need to be namespaced with `backpack`.

Like so:

```js
// .stylelintrc
{
  "rules": {
    "backpack/use-colors": true,
    "backpack/use-tokens": true
  }
}
```