function tax_calculator(income) {
  if (income < 250000) {
    return "no tax";
  } else if (income > 250000 && income < 500000) {
    return income - income * 0.9 + " tax";
  } else if (income > 500000 && income < 1000000) {
    return income - income * 0.8 + " tax";
  } else {
    return income - income * 0.7 + " tax";
  }
}
console.log(tax_calculator(1100000));
