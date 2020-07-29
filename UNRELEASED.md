# UNRELEASED

> Place your changes below this line.

# 1.1.0 - Updated linting rules
ADDED:
  `use-tokens`
    - Added an exception for values that don't have Bpk values such as `auto` and `0`
    - Added an exception when using the `%` unit as these don't have Bpk replacements

FIXED:
  `use-colors`:
    - Added checking against full list of possible colors - such as badge colors or banner alert colors

  `use-tokens`:
    - Changed token props to use correct css selectors as they previously were using React Native selectors.



## How to write a good changelog entry

1. Add 'Breaking', 'Added' or 'Fixed' in bold depending on if the change will be major, minor or patch according to [semver](semver.org).
2. Detail the changes. Write with the consumer in mind, what do they need to know. If it's patch, tell them what's changed. If it's minor, tell them what you've added and what it does for them. If it's breaking, tell them what they need to change.

Don't worry about adding the specific version number or the date. This will be done by a Backpack squad member as part of the release process.
