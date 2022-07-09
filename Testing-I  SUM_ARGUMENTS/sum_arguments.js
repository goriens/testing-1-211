function sum(...args) {
  if (args.length === 0) {
    return "sum is zero";
  }
  if (args.length === 1) {
    return "put atleast two value";
  }
  const sumValue = [...args].reduce((a, b) => a + Number(b), 0);
  return Number(sumValue.toFixed(1));
}
module.exports = sum;
