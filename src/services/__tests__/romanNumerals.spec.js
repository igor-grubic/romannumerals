import romanNumeralsService from '../romanNumerals';

describe('arabic numerals to roman numerals conversion', () => {
  it('should return I when input is 1', () => {
    expect(romanNumeralsService.convertFromArabic(1)).toBe('I');
  });
});
