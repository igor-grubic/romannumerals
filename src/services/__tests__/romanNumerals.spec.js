import romanNumeralsService from '../romanNumerals';

describe('arabic numerals to roman numerals conversion', () => {
  it.each`
    arabic | roman
    ${1}   | ${'I'}
    ${2}   | ${'II'}
    ${3}   | ${'III'}
  `('should return $roman when input is $arabic', ({arabic, roman}) => {
    expect(romanNumeralsService.convertFromArabic(arabic)).toBe(roman);
  });
});
