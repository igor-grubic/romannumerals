const data = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

const overlineSymbol = '\u0305';

const getSymbolFromArabic = (arabicSymbol) => {
  return data[arabicSymbol] || '';
};

export default {
  getSymbolFromArabic,
  overlineSymbol,
};
