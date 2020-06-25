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
    'backpack/use-tokens': [true],
  },
};

describe('Spacing token tests', () => {
  it('passes when setting spacing', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: 'a { width: $bpk-heading-content-margin-top; font-size: 14rem }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('should not throw as it uses a function', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; a { height: calc(#{$bpk-spacing-lg} - 1px); font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('throws an error when using raw number', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: '@import "~bpk-mixins/index"; a { width: 5rem; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      "Don't use raw numbers for `width` instead use a Backpack token or multiples of a token (backpack/use-tokens)",
    );
  });

  it('throws an error when not using Backpack token', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; $width-val:5rem a { width: $width-val; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      'Please ensure you are using Backpack tokens for `width` (backpack/use-tokens)',
    );
  });
});

describe('Radii token tests', () => {
  it('passes when setting spacing', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: 'a { borderRadius: $bpk-border-radius-sm; font-size: 14rem }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('should not throw as it uses a function', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; a { borderRadius: calc(#{$bpk-border-radius-sm} - 1px); font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('throws an error when using raw number', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; a { borderRadius: 5rem; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      "Don't use raw numbers for `borderRadius` instead use a Backpack token or multiples of a token (backpack/use-tokens)",
    );
  });

  it('throws an error when not using Backpack token', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; $radius-val:5rem a { borderRadius: $radius-val; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      'Please ensure you are using Backpack tokens for `borderRadius` (backpack/use-tokens)',
    );
  });
});

describe('Border token tests', () => {
  it('passes when setting spacing', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: 'a { borderWidth: $bpk-border-size-sm; font-size: 14rem }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('should not throw as it uses a function', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; a { borderWidth: calc(#{$bpk-border-size-sm} - 1px); font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('throws an error when using raw number', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; a { borderWidth: 5rem; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      "Don't use raw numbers for `borderWidth` instead use a Backpack token or multiples of a token (backpack/use-tokens)",
    );
  });

  it('throws an error when not using Backpack token', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; $border-val:5rem a { borderWidth: $radius-val; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      'Please ensure you are using Backpack tokens for `borderWidth` (backpack/use-tokens)',
    );
  });
});
