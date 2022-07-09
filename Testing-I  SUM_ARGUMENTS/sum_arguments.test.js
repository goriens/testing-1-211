const sum = require("./sum_arguments");

describe("Testing sum function", () => {
  test("add 2 positive numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("add 2 negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
  });
  test("add 2 floating numbers, where output is floating", () => {
    expect(sum(1.3, 2.3)).toBe(3.6);
  });
  test("add 2 floating numbers, where output is numbers", () => {
    expect(sum(1.5, 1.5)).toBe(3);
  });
  test("call sum without args", () => {
    expect(sum()).toBe("sum is zero");
  });
  test("call sum with one args", () => {
    expect(sum(1)).toBe("put atleast two value");
  });
});
