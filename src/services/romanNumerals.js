import romanSymbols from '../data/romanSymbols.js';
import messaging from '../messaging';

const MAX_NUMBER = 3999;
const MIN_NUMBER = 1;
const invalidInputMessage = `Query should be any number between ${MIN_NUMBER}-${MAX_NUMBER}`;

const repeatSymbol = (symbol, times) =>
  [...Array(times)].reduce((previousValue) => `${previousValue}${symbol}`, '');

const getRomanFromArabic = (digit, position) => {
  const multiplier = Math.pow(10, position);
  const symbols = {
    symbolForOne: romanSymbols.getSymbolFromArabic(1 * multiplier),
    symbolForFive: romanSymbols.getSymbolFromArabic(5 * multiplier),
    symbolForTen: romanSymbols.getSymbolFromArabic(10 * multiplier),
  };

  let result = '';
  switch (digit) {
    case 0:
      return '';
    case 1:
    case 2:
    case 3:
      result = repeatSymbol(symbols.symbolForOne, digit);
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
      result = `${symbols.symbolForFive}${repeatSymbol(symbols.symbolForOne, digit - 5)}`;
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

const isValidInput = (number) => {
  if (!number || number > MAX_NUMBER || number < MIN_NUMBER) return false;
  return true;
};

const numberToOrderedArrayOfDigits = (number) => {
  return [...`${number}`].map(Number).reverse();
};

const convertFromArabic = (number) => {
  if (!isValidInput(number))
    return messaging.createMessage(messaging.status.invalid_input, invalidInputMessage);

  const result = numberToOrderedArrayOfDigits(number).reduce(
    (previousValue, digit, position) => `${getRomanFromArabic(digit, position)}${previousValue}`,
    '',
  );

  return messaging.createMessage(messaging.status.success, result);
};

export default {
  convertFromArabic,
  invalidInputMessage,
};
