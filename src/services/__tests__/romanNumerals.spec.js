import romanNumeralsService from '../romanNumerals';

describe('arabic numerals to roman numerals conversion', () => {
  it.each`
    arabic | roman
    ${1}   | ${'I'}
    ${2}   | ${'II'}
    ${3}   | ${'III'}
    ${4}   | ${'IV'}
    ${5}   | ${'V'}
    ${6}   | ${'VI'}
    ${7}   | ${'VII'}
    ${8}   | ${'VIII'}
    ${9}   | ${'IX'}
    ${10}  | ${'X'}
  `('should return $roman when input is $arabic', ({arabic, roman}) => {
    expect(romanNumeralsService.convertFromArabic(arabic)).toBe(roman);
  });
});
