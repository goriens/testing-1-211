const fn = require("./fn.js");

describe("Testing fn function", () => {
  test("5200 5 seconds", () => {
    expect(fn(5200)).toBe("00:00:05");
  });
  test("60000 1 minute", () => {
    expect(fn(60000)).toBe("00:01:00");
  });
  test("180000 3 minute", () => {
    expect(fn(180000)).toBe("00:03:00");
  });
  test("200000 1 minute and 20 seconds", () => {
    expect(fn(200000)).toBe("00:03:20");
  });
  test("7200000 2 hours", () => {
    expect(fn(7200000)).toBe("02:00:00");
  });
  test("7200000 2 hours and 3 minutes 20 seconds", () => {
    expect(fn(7400000)).toBe("02:03:20");
  });
});
