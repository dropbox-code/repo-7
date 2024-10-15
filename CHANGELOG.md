# Changelog

## [1.0.6](https://github.com/dropbox-code/repo-7/compare/v1.0.9...v1.0.6) (2024-10-15)


### ✨ New Features

* Add `run-prev-coverage` flag ([b4d7937](https://github.com/dropbox-code/repo-7/commit/b4d7937af031e6e977341679d2a5b8cae5ff68cc))
* Add functionality from existing node actions into repo ([454739b](https://github.com/dropbox-code/repo-7/commit/454739b677d0b1744534f7a73a47f927fe0b9212))
* Add inputs to enable / disable parts of the action([#20](https://github.com/dropbox-code/repo-7/issues/20)) ([a74d1f2](https://github.com/dropbox-code/repo-7/commit/a74d1f2082274824dc38bf7af22decd7a9967de3))
* Add more deatils comments ([454739b](https://github.com/dropbox-code/repo-7/commit/454739b677d0b1744534f7a73a47f927fe0b9212))
* Adds working directory ([#23](https://github.com/dropbox-code/repo-7/issues/23)) ([fe7b327](https://github.com/dropbox-code/repo-7/commit/fe7b327823ca6ef12102ec55fbce2e4a7bb1a238))
* Push changes back onto branch ([4c2274e](https://github.com/dropbox-code/repo-7/commit/4c2274eac539a17d8ef93f3d5cfd2fec2c016700))


### 🪲 Bug Fixes

* Action fails when previous commit had a failing test ([#32](https://github.com/dropbox-code/repo-7/issues/32)) ([e411b2e](https://github.com/dropbox-code/repo-7/commit/e411b2e2cb35330929a537363c7ca48522466385))
* Action should now only commit once, not twice ([#39](https://github.com/dropbox-code/repo-7/issues/39)) ([b06c962](https://github.com/dropbox-code/repo-7/commit/b06c9621b53a20f0c6f5f3a5d9a101c3c05ebbb9))
* Add basic error reporting ([#8](https://github.com/dropbox-code/repo-7/issues/8)) ([a2a68cd](https://github.com/dropbox-code/repo-7/commit/a2a68cdbc323dedf56f02152d02bcff3377501ef))
* Add basic support for checking if branch is behind ([7057abf](https://github.com/dropbox-code/repo-7/commit/7057abf4f1093d4ebafeab0c436b179492b2db26))
* add in behind_by ([bebb2bc](https://github.com/dropbox-code/repo-7/commit/bebb2bcd7c1238cc718c654e9ad263f6d42aec0f))
* Add input to change the desired coverage percentage ([#37](https://github.com/dropbox-code/repo-7/issues/37)) ([d4a5194](https://github.com/dropbox-code/repo-7/commit/d4a5194e5c911b6ba062dbaa0a51a7a05fc38782))
* Comment works correctly for failed test ([#9](https://github.com/dropbox-code/repo-7/issues/9)) ([cd84942](https://github.com/dropbox-code/repo-7/commit/cd84942b9cde14e13d12a49e3016f5b37c175705))
* Don't commit coverage directory ([#35](https://github.com/dropbox-code/repo-7/issues/35)) ([3211e3e](https://github.com/dropbox-code/repo-7/commit/3211e3ec9134fa756c2f53c3eb9a763303bd1b04))
* Git push fails when cacluating previous coverage ([#30](https://github.com/dropbox-code/repo-7/issues/30)) ([2eef29f](https://github.com/dropbox-code/repo-7/commit/2eef29f3c53790c3b36a4c3683634b450f306c8f))
* Pass correct coverage path for generating previous test results ([#27](https://github.com/dropbox-code/repo-7/issues/27)) ([bdb334b](https://github.com/dropbox-code/repo-7/commit/bdb334b63582e51403a08687ff0ec1d54ca4e6c4))
* Show info only lints in comment ([e0586be](https://github.com/dropbox-code/repo-7/commit/e0586befd1d06ad4a7f11f1af18dcf1a7de07ffb))
* **UX-1139:** Prevent commiting coverage file; store previous coverage result as artifact ([#25](https://github.com/dropbox-code/repo-7/issues/25)) ([b4d7937](https://github.com/dropbox-code/repo-7/commit/b4d7937af031e6e977341679d2a5b8cae5ff68cc))


### 📈 Documentation

* Add brief documentation comments to each function ([2eef29f](https://github.com/dropbox-code/repo-7/commit/2eef29f3c53790c3b36a4c3683634b450f306c8f))
* Add information to readme ([7057abf](https://github.com/dropbox-code/repo-7/commit/7057abf4f1093d4ebafeab0c436b179492b2db26))
* Add more information to readme ([a4840b1](https://github.com/dropbox-code/repo-7/commit/a4840b1c2fff861349877b95f2ace7f0a2f0bdef))
* Add version to readme instructions ([#6](https://github.com/dropbox-code/repo-7/issues/6)) ([80285f5](https://github.com/dropbox-code/repo-7/commit/80285f5bdccf470fdd80c095943f0254871ab0da))
* Adding step documentation ([2ee2be1](https://github.com/dropbox-code/repo-7/commit/2ee2be1544bf864f860f85398e12825aa4db7328))


### 🧪 Tests

* Add flutter repos for testing good and bad state ([a4840b1](https://github.com/dropbox-code/repo-7/commit/a4840b1c2fff861349877b95f2ace7f0a2f0bdef))
* Add tests for analyze, coverage and test ([a4840b1](https://github.com/dropbox-code/repo-7/commit/a4840b1c2fff861349877b95f2ace7f0a2f0bdef))
* Added --local input arg to test functionality locally ([2eef29f](https://github.com/dropbox-code/repo-7/commit/2eef29f3c53790c3b36a4c3683634b450f306c8f))
* Fix coverage test ([a74d1f2](https://github.com/dropbox-code/repo-7/commit/a74d1f2082274824dc38bf7af22decd7a9967de3))
* Initialize Jest ([a4840b1](https://github.com/dropbox-code/repo-7/commit/a4840b1c2fff861349877b95f2ace7f0a2f0bdef))
* Setup jest tests ([#4](https://github.com/dropbox-code/repo-7/issues/4)) ([a4840b1](https://github.com/dropbox-code/repo-7/commit/a4840b1c2fff861349877b95f2ace7f0a2f0bdef))


### 🧹 Miscellaneous Chores

* Add debug logs ([b4d7937](https://github.com/dropbox-code/repo-7/commit/b4d7937af031e6e977341679d2a5b8cae5ff68cc))
* Add required files contributing, code of conduct etc. ([7057abf](https://github.com/dropbox-code/repo-7/commit/7057abf4f1093d4ebafeab0c436b179492b2db26))
* **main:** release 1.0.0 ([#2](https://github.com/dropbox-code/repo-7/issues/2)) ([b191523](https://github.com/dropbox-code/repo-7/commit/b19152344888db9a0da250910f1b0a4339126e74))
* **main:** release 1.0.1 ([#7](https://github.com/dropbox-code/repo-7/issues/7)) ([357cee2](https://github.com/dropbox-code/repo-7/commit/357cee26fb63d6600048a2852b7ab10234d1c54e))
* **main:** release 1.0.2 ([#11](https://github.com/dropbox-code/repo-7/issues/11)) ([c58b96a](https://github.com/dropbox-code/repo-7/commit/c58b96a8f1ab9422f1e272ad3023afe7dc7fca68))
* **main:** release 1.0.3 ([#19](https://github.com/dropbox-code/repo-7/issues/19)) ([b8a5ff7](https://github.com/dropbox-code/repo-7/commit/b8a5ff73d57c788aafd69501e64acb7b8b9b8f69))
* **main:** release 1.0.4 ([#21](https://github.com/dropbox-code/repo-7/issues/21)) ([6360f40](https://github.com/dropbox-code/repo-7/commit/6360f4012104b4243d1945c5b0517f0419f9d9b0))
* **main:** release 1.0.5 ([#24](https://github.com/dropbox-code/repo-7/issues/24)) ([6179244](https://github.com/dropbox-code/repo-7/commit/6179244ab87c19836009f97ed9d67d5d43c37f72))
* **main:** release 1.0.6 ([#26](https://github.com/dropbox-code/repo-7/issues/26)) ([b77cf7b](https://github.com/dropbox-code/repo-7/commit/b77cf7bd16cb268a9660a58b1b6de3425281a12f))
* **main:** release 1.0.7 ([#28](https://github.com/dropbox-code/repo-7/issues/28)) ([99a7bec](https://github.com/dropbox-code/repo-7/commit/99a7bec60ebd976f5a13c517e5ce9a5b696b8019))
* **main:** release 1.0.8 ([#31](https://github.com/dropbox-code/repo-7/issues/31)) ([1a53f5d](https://github.com/dropbox-code/repo-7/commit/1a53f5df22aa659c051896e9e5e220e4a8abb5ce))
* **main:** release 1.0.9 ([#34](https://github.com/dropbox-code/repo-7/issues/34)) ([9a2facd](https://github.com/dropbox-code/repo-7/commit/9a2facdc47820ba4e491b2fde43e895e28bd3088))
* release 1.0.0 ([baba357](https://github.com/dropbox-code/repo-7/commit/baba3575b342dfe32c3cc98d1b78577f1aba3b52))
* release 1.0.3 ([f3941c2](https://github.com/dropbox-code/repo-7/commit/f3941c29da80549c8f95776c397b12a2f1e2f4b1))
* release 1.0.4 ([209c44c](https://github.com/dropbox-code/repo-7/commit/209c44c87034893f3fbb7d6537d5e386166062ad))
* release 1.0.5 ([9d5c138](https://github.com/dropbox-code/repo-7/commit/9d5c138155331e99472ac1874facb4c69d576b27))
* Tidy directory structure ([a4840b1](https://github.com/dropbox-code/repo-7/commit/a4840b1c2fff861349877b95f2ace7f0a2f0bdef))
* update gitignore to remove unneeded files ([80285f5](https://github.com/dropbox-code/repo-7/commit/80285f5bdccf470fdd80c095943f0254871ab0da))
* update readme ([fe7b327](https://github.com/dropbox-code/repo-7/commit/fe7b327823ca6ef12102ec55fbce2e4a7bb1a238))

## [1.0.9](https://github.com/ZebraDevs/flutter-code-quality/compare/v1.0.8...v1.0.9) (2024-08-22)


### 🪲 Bug Fixes

* Action fails when previous commit had a failing test ([#32](https://github.com/ZebraDevs/flutter-code-quality/issues/32)) ([e411b2e](https://github.com/ZebraDevs/flutter-code-quality/commit/e411b2e2cb35330929a537363c7ca48522466385))
* Don't commit coverage directory ([#35](https://github.com/ZebraDevs/flutter-code-quality/issues/35)) ([3211e3e](https://github.com/ZebraDevs/flutter-code-quality/commit/3211e3ec9134fa756c2f53c3eb9a763303bd1b04))

## [1.0.8](https://github.com/ZebraDevs/flutter-code-quality/compare/v1.0.7...v1.0.8) (2024-08-19)


### 🪲 Bug Fixes

* Git push fails when cacluating previous coverage ([#30](https://github.com/ZebraDevs/flutter-code-quality/issues/30)) ([2eef29f](https://github.com/ZebraDevs/flutter-code-quality/commit/2eef29f3c53790c3b36a4c3683634b450f306c8f))


### 📈 Documentation

* Add brief documentation comments to each function ([2eef29f](https://github.com/ZebraDevs/flutter-code-quality/commit/2eef29f3c53790c3b36a4c3683634b450f306c8f))


### 🧪 Tests

* Added --local input arg to test functionality locally ([2eef29f](https://github.com/ZebraDevs/flutter-code-quality/commit/2eef29f3c53790c3b36a4c3683634b450f306c8f))

## [1.0.7](https://github.com/ZebraDevs/flutter-code-quality/compare/v1.0.6...v1.0.7) (2024-07-23)


### 🪲 Bug Fixes

* Pass correct coverage path for generating previous test results ([#27](https://github.com/ZebraDevs/flutter-code-quality/issues/27)) ([bdb334b](https://github.com/ZebraDevs/flutter-code-quality/commit/bdb334b63582e51403a08687ff0ec1d54ca4e6c4))

## [1.0.6](https://github.com/ZebraDevs/flutter-code-quality/compare/v1.0.5...v1.0.6) (2024-07-22)


### ✨ New Features

* Add `run-prev-coverage` flag ([b4d7937](https://github.com/ZebraDevs/flutter-code-quality/commit/b4d7937af031e6e977341679d2a5b8cae5ff68cc))


### 🪲 Bug Fixes

* **UX-1139:** Prevent commiting coverage file; store previous coverage result as artifact ([#25](https://github.com/ZebraDevs/flutter-code-quality/issues/25)) ([b4d7937](https://github.com/ZebraDevs/flutter-code-quality/commit/b4d7937af031e6e977341679d2a5b8cae5ff68cc))


### 🧹 Miscellaneous Chores

* Add debug logs ([b4d7937](https://github.com/ZebraDevs/flutter-code-quality/commit/b4d7937af031e6e977341679d2a5b8cae5ff68cc))

## [1.0.5](https://github.com/ZebraDevs/flutter-code-quality/compare/v1.0.4...v1.0.5) (2024-07-16)


### ✨ New Features

* Adds working directory ([#23](https://github.com/ZebraDevs/flutter-code-quality/issues/23)) ([fe7b327](https://github.com/ZebraDevs/flutter-code-quality/commit/fe7b327823ca6ef12102ec55fbce2e4a7bb1a238))


### 🧹 Miscellaneous Chores

* release 1.0.5 ([9d5c138](https://github.com/ZebraDevs/flutter-code-quality/commit/9d5c138155331e99472ac1874facb4c69d576b27))
* update readme ([fe7b327](https://github.com/ZebraDevs/flutter-code-quality/commit/fe7b327823ca6ef12102ec55fbce2e4a7bb1a238))

## [1.0.4](https://github.com/ZebraDevs/flutter-code-quality/compare/v1.0.3...v1.0.4) (2024-07-16)


### ✨ New Features

* Add inputs to enable / disable parts of the action([#20](https://github.com/ZebraDevs/flutter-code-quality/issues/20)) ([a74d1f2](https://github.com/ZebraDevs/flutter-code-quality/commit/a74d1f2082274824dc38bf7af22decd7a9967de3))


### 🧪 Tests

* Fix coverage test ([a74d1f2](https://github.com/ZebraDevs/flutter-code-quality/commit/a74d1f2082274824dc38bf7af22decd7a9967de3))


### 🧹 Miscellaneous Chores

* release 1.0.4 ([209c44c](https://github.com/ZebraDevs/flutter-code-quality/commit/209c44c87034893f3fbb7d6537d5e386166062ad))

## [1.0.3](https://github.com/ZebraDevs/flutter-code-quality/compare/v1.0.2...v1.0.3) (2024-07-10)


### 🧹 Miscellaneous Chores

* release 1.0.3 ([f3941c2](https://github.com/ZebraDevs/flutter-code-quality/commit/f3941c29da80549c8f95776c397b12a2f1e2f4b1))

## [1.0.2](https://github.com/ZebraDevs/flutter-code-quality/compare/v1.0.1...v1.0.2) (2024-07-10)


### 🪲 Bug Fixes

* Show info only lints in comment ([e0586be](https://github.com/ZebraDevs/flutter-code-quality/commit/e0586befd1d06ad4a7f11f1af18dcf1a7de07ffb))

## [1.0.1](https://github.com/ZebraDevs/flutter-code-quality/compare/v1.0.0...v1.0.1) (2024-07-03)


### 🪲 Bug Fixes

* Add basic error reporting ([#8](https://github.com/ZebraDevs/flutter-code-quality/issues/8)) ([a2a68cd](https://github.com/ZebraDevs/flutter-code-quality/commit/a2a68cdbc323dedf56f02152d02bcff3377501ef))
* Comment works correctly for failed test ([#9](https://github.com/ZebraDevs/flutter-code-quality/issues/9)) ([cd84942](https://github.com/ZebraDevs/flutter-code-quality/commit/cd84942b9cde14e13d12a49e3016f5b37c175705))


### 📈 Documentation

* Add version to readme instructions ([#6](https://github.com/ZebraDevs/flutter-code-quality/issues/6)) ([80285f5](https://github.com/ZebraDevs/flutter-code-quality/commit/80285f5bdccf470fdd80c095943f0254871ab0da))


### 🧹 Miscellaneous Chores

* update gitignore to remove unneeded files ([80285f5](https://github.com/ZebraDevs/flutter-code-quality/commit/80285f5bdccf470fdd80c095943f0254871ab0da))

## [1.0.0](https://github.com/ZebraDevs/flutter-code-quality/compare/v0.0.1...v1.0.0) (2024-06-26)


### ✨ New Features

* Add functionality from existing node actions into repo ([454739b](https://github.com/ZebraDevs/flutter-code-quality/commit/454739b677d0b1744534f7a73a47f927fe0b9212))
* Add more deatils comments ([454739b](https://github.com/ZebraDevs/flutter-code-quality/commit/454739b677d0b1744534f7a73a47f927fe0b9212))
* Push changes back onto branch ([4c2274e](https://github.com/ZebraDevs/flutter-code-quality/commit/4c2274eac539a17d8ef93f3d5cfd2fec2c016700))


### 🪲 Bug Fixes

* Add basic support for checking if branch is behind ([7057abf](https://github.com/ZebraDevs/flutter-code-quality/commit/7057abf4f1093d4ebafeab0c436b179492b2db26))
* add in behind_by ([bebb2bc](https://github.com/ZebraDevs/flutter-code-quality/commit/bebb2bcd7c1238cc718c654e9ad263f6d42aec0f))


### 📈 Documentation

* Add information to readme ([7057abf](https://github.com/ZebraDevs/flutter-code-quality/commit/7057abf4f1093d4ebafeab0c436b179492b2db26))
* Add more information to readme ([a4840b1](https://github.com/ZebraDevs/flutter-code-quality/commit/a4840b1c2fff861349877b95f2ace7f0a2f0bdef))
* Adding step documentation ([2ee2be1](https://github.com/ZebraDevs/flutter-code-quality/commit/2ee2be1544bf864f860f85398e12825aa4db7328))


### 🧪 Tests

* Add flutter repos for testing good and bad state ([a4840b1](https://github.com/ZebraDevs/flutter-code-quality/commit/a4840b1c2fff861349877b95f2ace7f0a2f0bdef))
* Add tests for analyze, coverage and test ([a4840b1](https://github.com/ZebraDevs/flutter-code-quality/commit/a4840b1c2fff861349877b95f2ace7f0a2f0bdef))
* Initialize Jest ([a4840b1](https://github.com/ZebraDevs/flutter-code-quality/commit/a4840b1c2fff861349877b95f2ace7f0a2f0bdef))
* Setup jest tests ([#4](https://github.com/ZebraDevs/flutter-code-quality/issues/4)) ([a4840b1](https://github.com/ZebraDevs/flutter-code-quality/commit/a4840b1c2fff861349877b95f2ace7f0a2f0bdef))


### 🧹 Miscellaneous Chores

* Add required files contributing, code of conduct etc. ([7057abf](https://github.com/ZebraDevs/flutter-code-quality/commit/7057abf4f1093d4ebafeab0c436b179492b2db26))
* release 1.0.0 ([baba357](https://github.com/ZebraDevs/flutter-code-quality/commit/baba3575b342dfe32c3cc98d1b78577f1aba3b52))
* Tidy directory structure ([a4840b1](https://github.com/ZebraDevs/flutter-code-quality/commit/a4840b1c2fff861349877b95f2ace7f0a2f0bdef))
