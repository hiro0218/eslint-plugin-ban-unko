"use strict";

const { RuleTester } = require("eslint");
const plugin = require("../lib");

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021
  }
});

ruleTester.run("no-unko", plugin.rules["no-unko"], {
  valid: [
    'const helloWorld = "Hello World";',
    'const noUnko = "noUnko";'
  ],
  invalid: [
    {
      code: 'const unko = "💩";',
      errors: [
        {
          message: "The word '💩' is banned",
          type: "Literal"
        }
      ]
    },
    {
      code: 'const message = "I stepped on unko";',
      errors: [
        {
          message: "The word 'unko' is banned",
          type: "Literal"
        }
      ]
    },
    {
      code: "const message = `I saw a pile of うんこ yesterday`;",
      errors: [
        {
          message: "The word 'うんこ' is banned",
          type: "TemplateElement"
        }
      ]
    },
    {
      code: "const message = `I smelled ｳﾝｺ on the street`;",
      errors: [
        {
          message: "The word 'ｳﾝｺ' is banned",
          type: "TemplateElement"
        }
      ]
    },
    {
      code: "const message = `My dog rolled in ウンコ at the park`;",
      errors: [
        {
          message: "The word 'ウンコ' is banned",
          type: "TemplateElement"
        }
      ]
    },
    {
      code: "const message = `The poop emoji is my favorite emoji`;",
      errors: [
        {
          message: "The word 'poop' is banned",
          type: "TemplateElement"
        }
      ]
    },
    {
      code: 'const message = `I prefer to use the word "feces" instead of "unko"`;',
      errors: [
        {
          message: "The word 'feces' is banned",
          type: "TemplateElement"
        }
      ]
    }
  ]
});
