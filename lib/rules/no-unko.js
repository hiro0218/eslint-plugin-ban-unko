const isOffensive = (text) =>
  typeof text === "string" &&
  /💩|うんこ|ｳﾝｺ|ウンコ|unko|poop|feces/.test(text.toLowerCase());
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
    messages: {
      noUnko: "",
    },
  },
  create(context) {
    const message = "The use of strings similar to 💩 is prohibited.";
    const report = reportWith(message);

    return {
      Literal(node) {
        isOffensive(node.value) && report(context, node);
      },
      Identifier(node) {
        isOffensive(node.name) && report(context, node);
      },
      TemplateElement(node) {
        isOffensive(node.value.raw) && report(context, node);
      },
      Program(node) {
        node.comments
          .filter((c) => c.type !== "Shebang")
          .forEach((c) => {
            isOffensive(c.value) && report(context, c);
          });
      },
    };
  },
};

module.exports.rules = {
  "no-unko": Rule,
};
