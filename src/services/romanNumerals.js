import romanSymbols from '../data/romanSymbols.js';

const repeatSymbol = (symbol, times) =>
  [...Array(times)].reduce((previousValue) => `${previousValue}${symbol}`, '');

const getRomanFromArabic = (arabicNumber) => {
  const symbols = {
    symbolForOne: romanSymbols.getSymbolFromArabic(1),
    symbolForFive: romanSymbols.getSymbolFromArabic(5),
    symbolForTen: romanSymbols.getSymbolFromArabic(10),
  };

  let result = '';
  switch (arabicNumber) {
    case 0:
      return '';
    case 1:
    case 2:
    case 3:
      result = repeatSymbol(symbols.symbolForOne, arabicNumber);
      break;
    case 4:
      result = `${symbols.symbolForOne}${symbols.symbolForFive}`;
      break;
    case 5:
      result = symbols.symbolForFive;
      break;
    case 6:
    case 7:
    case 8:
      result = `${symbols.symbolForFive}${repeatSymbol(symbols.symbolForOne, arabicNumber - 5)}`;
      break;
    case 9:
      result = `${symbols.symbolForOne}${symbols.symbolForTen}`;
      break;
    case 10:
      result = `${symbols.symbolForTen}`;
      break;
  }
  return result;
};

const convertFromArabic = (number) => {
  return getRomanFromArabic(number);
};

export default {
  convertFromArabic,
};
