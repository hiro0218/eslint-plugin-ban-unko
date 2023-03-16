"use strict";

module.exports = {
  rules: {
    "no-unko": {
      meta: {
        type: "problem",
        docs: {
          description: "ban 💩, うんこ, ｳﾝｺ, ウンコ, unko, poop, feces",
          category: "Possible Errors",
          recommended: true,
        },
        schema: [],
      },
      create: function (context) {
        return {
          Identifier(node) {
            const { name } = node;
            const options = context.options[0] || {};
            const message = options.message || `${name} は禁止ワードです。`;
            if (/[うｳ][んﾝ][こｺ][💩]/u.test(name)) {
              context.report({
                node,
                message,
              });
            }
          },
        };
      },
    },
  },
};
