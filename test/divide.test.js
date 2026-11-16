const { test } = require("node:test");
const assert = require("node:assert/strict");
const { divide } = require("../src/divide");

test("divide() returns the quotient of two numbers", () => {
  assert.equal(divide(6, 3), 2);
  assert.equal(divide(1, 2), 0.5);
  assert.equal(divide(-6, 3), -2);
});

test("divide() throws on division by zero", () => {
  assert.throws(() => divide(5, 0), { message: "Division by zero" });
});
