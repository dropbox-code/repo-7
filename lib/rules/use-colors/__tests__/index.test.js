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

const { lint } = require('stylelint');

const config = {
  plugins: ['./index.js'],
  rules: {
    'backpack/use-colors': [true],
  },
};

it('passes when setting color', async () => {
  const {
    results: [{ warnings }],
  } = await lint({
    code: 'a { color: $bpk-color-sky-blue; font-size: 14rem }',
    config,
  });

  expect(warnings).toHaveLength(0);
});

it('passes when setting backgroundColor', async () => {
  const {
    results: [{ warnings }],
  } = await lint({
    code:
      'a { backgroundColor: $bpk-color-sky-gray-tint-01; font-size: 14rem }',
    config,
  });

  expect(warnings).toHaveLength(0);
});

it('should allow using an exception value', async () => {
  const {
    results: [{ warnings }],
  } = await lint({
    code: 'a { color: transparent; font-size: 14rem }',
    config,
  });

  expect(warnings).toHaveLength(0);
});

it('gives an error and shows token to use', async () => {
  const {
    results: [{ warnings }],
  } = await lint({
    code: 'a { color: rgb(7, 112, 227); font-size: 14rem }',
    config,
  });

  expect(warnings).toHaveLength(1);
  expect(warnings[0].text).toBe(
    'Use the following Backpack token instead: $bpk-color-sky-blue (backpack/use-colors)',
  );
});

it('gives an unknown color error and to use a token', async () => {
  const {
    results: [{ warnings }],
  } = await lint({
    code: 'a { color: blue; font-size: 14rem }',
    config,
  });

  expect(warnings).toHaveLength(1);
  expect(warnings[0].text).toBe('Unknown color, use a Backpack token instead');
});

it('gives an unknown color error when value is null', async () => {
  const {
    results: [{ warnings }],
  } = await lint({
    code: 'a { color: null; font-size: 14rem }',
    config,
  });

  expect(warnings).toHaveLength(1);
  expect(warnings[0].text).toBe('Unknown color, use a Backpack token instead');
});
