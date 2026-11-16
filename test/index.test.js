const { test } = require("node:test");
const assert = require("node:assert/strict");
const { add } = require("../src/index");

test("add() sums two numbers", () => {
  assert.equal(add(2, 3), 5);
  assert.equal(add(-1, 1), 0);
});
