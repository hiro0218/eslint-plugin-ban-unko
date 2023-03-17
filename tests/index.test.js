const { RuleTester } = require("eslint");
const rule = require("../lib/rules/no-unko").rules["no-unko"];

const ruleTester = new RuleTester();
ruleTester.run("no-unko", rule, {
  valid: ['"hello"', '"HELLO"', "console.log(123)", { code: "var hoge = 1" }],
  invalid: [
    invalid('"💩"'),
    invalid('"うんこ"'),
    invalid('"ｳﾝｺ"'),
    invalid('"ウンコ"'),
    invalid('"unko"'),
    invalid('"poop"'),
    invalid('"feces"'),
    invalid('var foo = "unko"'),
    invalid('var unko = "foo"'),
    invalid("function unko() {}"),
  ],
});

function invalid(code, output) {
  const invalidTest = {
    code,
    errors: [{ message: "The use of symbols resembling 💩 is not allowed." }],
  };
  if (output) {
    invalidTest.output = output;
  }
  return invalidTest;
}
