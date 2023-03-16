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
      create(context) {
        const sourceCode = context.getSourceCode();

        function checkToken(token) {
          const tokenValue = token.value;
          const forbiddenWords = ["💩", "うんこ", "ｳﾝｺ", "ウンコ", "unko", "poop", "feces"];

          if (forbiddenWords.includes(tokenValue)) {
            context.report({
              loc: token.loc,
              message: `The word '${tokenValue}' is banned`,
            });
          }
        }

        return {
          Identifier(node) {
            const token = sourceCode.getFirstToken(node);
            if (token) {
              checkToken(token);
            }
          },
          Literal(node) {
            const token = sourceCode.getFirstToken(node);
            if (token) {
              checkToken(token);
            }
          },
        };
      },
    },
  },
};
