const repeatSymbol = (symbol, times) =>
  [...Array(times)].reduce((previousValue) => `${previousValue}${symbol}`, '');

const convertFromArabic = (number) => {
  return repeatSymbol('I', number);
};

export default {
  convertFromArabic,
};
