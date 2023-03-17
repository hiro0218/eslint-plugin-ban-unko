# eslint-plugin-ban-unko

ESLint plugin to ban the word "unko" and related terms from your codebase.

## Installation

You can install the plugin using npm:

```
npm install eslint-plugin-ban-unko --save-dev
```

## Usage

Add the plugin to your ESLint configuration file (e.g. `.eslintrc.js`):

```javascript
module.exports = {
  plugins: ["ban-unko"],
  rules: {
    "ban-unko/no-unko": "error",
  },
};
```

Now, any usage of the word "unko" or related terms in your codebase will trigger an error.

## Supported Words

See the following sources for currently banned words.

https://github.com/hiro0218/eslint-plugin-ban-unko/blob/main/lib/rules/no-unko.js#L1-L21
