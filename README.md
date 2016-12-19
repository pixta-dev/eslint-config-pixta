# eslint-config-pixta [![npm version](https://badge.fury.io/js/eslint-config-pixta.svg)](https://badge.fury.io/js/eslint-config-pixta)
This package provides PIXTA's .eslintrc as an extensible shared config.

## Usage
1. Execute `npm install --save-dev eslint-config-pixta eslint-plugin-import`
2. Add `"extends": "pixta"` to your .eslintrc

### Sample
```.eslintrc
{
  "env": {
    "browser": true
  },
  "extends": [
    "pixta"
  ],
  "globals": {
    "gon": true
  }
}
```

## Rules
Our style guide is based on:

* [ESLint Recommended](http://eslint.org/docs/rules/)
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

Only differences from base rules are shown below.

### 未使用引数の先頭には`_`を付ける (no-unused-vars)
デフォルト設定では、未使用の引数の存在をそもそも許さない。
ピクスタでは、インターフェースを明示するために未使用引数の利用を許す。
ただし、その際には先頭に`_`を付与しなくてはならない。

* [no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]](http://eslint.org/docs/rules/no-unused-vars#argsignorepattern)

```javascript
// bad
function foo(x, y) {
    return x + 1;
}

// good
function foo(x, _y) {
    return x + 1;
}
```

### プライベートメソッドの先頭には`_`を付ける (no-underscore-dangle)
JavaScript のオブジェクトのメソッドには public/private を定義できない。
プライベートメソッドだと明示するために、先頭には`_`を付けることとする。

* ["no-underscore-dangle": ["error", { "allowAfterThis": true }]](http://eslint.org/docs/rules/no-underscore-dangle#allowafterthis)

```javascript
// bad
class Foo {
  bar () { // bar は private メソッドを想定
    ..
  }
}

// good
class Foo {
  _bar () { // bar は private メソッドを想定
    ..
  }
}
```
