# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

# 1.1.0 - Updated linting rules
ADDED:
  `use-tokens`
    - Added an exception for values that don't have Bpk values such as `auto` and `0`
    - Added an exception when using the `%` unit as these don't have Bpk replacements
    - This rule now supports shorthand CSS props `margin`, `padding`, `border-radius` and `border-width` for linting.

FIXED:
  `use-colors`:
    - Added checking against full list of possible colors - such as badge colors or banner alert colors

  `use-tokens`:
    - Changed token props to use correct css selectors as they previously were using React Native selectors.

## 1.0.0 - Added token linting rules
- Added linting rules for testing colour tokens in use.
- Added linting rules for testing spacing, radii and border tokens when not in binary expressions.