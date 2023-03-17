const unkoWords = [
  "💩",
  "💩︎", // VS15
  "💩️", // VS16
  "うんこ",
  "ｳﾝｺ",
  "ウンコ",
  "うんち",
  "ｳﾝﾁ",
  "ウンチ",
  "くそ",
  "クソ",
  "ｸｿ",
  "糞",
  "unko",
  "poop",
  "poopoo",
  "poo-poo",
  "doo-doo",
  "feces",
];
const unkoRegex = new RegExp(unkoWords.join("|"), "i");
const isUnkoWord = (text) => typeof text === "string" && unkoRegex.test(text);
const reportWith = (message) => (context, node) =>
  context.report(node, message);

const Rule = {
  meta: {
    docs: {
      description: "Disallow use of offensive language",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    const message = "The use of symbols resembling 💩 is not allowed.";
    const report = reportWith(message);

    return {
      Literal(node) {
        isUnkoWord(node.value) && report(context, node);
      },
      Identifier(node) {
        isUnkoWord(node.name) && report(context, node);
      },
      TemplateElement(node) {
        isUnkoWord(node.value.raw) && report(context, node);
      },
      Program(node) {
        node.comments
          .filter((c) => c.type !== "Shebang")
          .forEach((c) => {
            isUnkoWord(c.value) && report(context, c);
          });
      },
    };
  },
};

module.exports.rules = {
  "no-unko": Rule,
};
