# [8.0.0](https://github.com/peerigon/markdown-loader/compare/v7.0.0...v8.0.0) (2022-01-27)


* Introduce semantic-release ([65e2368](https://github.com/peerigon/markdown-loader/commit/65e23682f295296ec918e24fa25fccbdd9e8957a))


### BREAKING CHANGES

* Every call to marked is isolated now. This makes sure that options from the first call won't influence options from the second call. If you've configured the markdown-loader with two different options, you might observe different behavior now. We also removed Node v8 and Node v10 support and support for older webpack versions. Webpack 5 is required now.

## Changelog

### 7.0.0

- **Breaking:** Update marked@4.0.12 to fix security issues ([#82](https://github.com/peerigon/markdown-loader/issues/82))

### 6.0.0

- Remove Node v6 support

### 5.2.0

- Update dependencies
- Note: This version is deprecated since it already removed official Node v6 support which should have been published as breaking change

### 5.1.0

- Update dependencies

### 5.0.0

- Update dependencies
  - **Breaking** marked@0.6.0 @tmorehouse [Changelog](https://github.com/markedjs/marked/releases/tag/v0.6.0)
- switch to snapshot tests @meaku
- reduce shipped files via npm @styfle
- fix URL to marked repo @styfle

### 4.0.0

- Update dependencies
  - **Breaking** marked@0.5.0 @robcresswell [Changelog](https://github.com/markedjs/marked/releases/tag/v0.5.0)

### 3.0.0

- Update dependencies
  - **Breaking** marked@4.0.0 (@hpohlmeyer) [Changelog](https://github.com/markedjs/marked/releases/tag/0.4.0)
  - use webpack 4.x for tests
  - update example to use npm version of `markdown-loader`

### 2.0.2

- Update dependencies
  - marked@0.3.9 (@xuopled)

### 2.0.1

- Update dependencies
  - loader-utils@1.1.0 (@kommander)

### 2.0.0

- **Breaking:** Drop Node.js 0.12 support
- **Breaking:** Drop support for custom config key (webpack 1)
- Update documentation for webpack 2
- Add tests
- Update dependencies
  - marked@0.3.6
