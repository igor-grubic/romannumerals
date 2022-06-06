import romanSymbols from '../data/romanSymbols.js';

const repeatSymbol = (symbol, times) =>
  [...Array(times)].reduce((previousValue) => `${previousValue}${symbol}`, '');

const convertFromArabic = (number) => {
  const symbolForOne = romanSymbols.getSymbolFromArabic(1);
  return repeatSymbol(symbolForOne, number);
};

export default {
  convertFromArabic,
};
