const additionFn = (first, second) => {
  if (isNaN(first) || isNaN(second)) return "NOT A NUMBER";
  return +first + +second;
};

module.exports = additionFn;
