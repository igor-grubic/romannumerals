import romanNumeralsService from '../romanNumerals';

describe('arabic numerals to roman numerals conversion', () => {
  it('should return I when input is 1', () => {
    expect(romanNumeralsService.convertFromArabic(1)).toBe('I');
  });
  it('should return II when input is 2', () => {
    expect(romanNumeralsService.convertFromArabic(2)).toBe('II');
  });
  it('should return III when input is 3', () => {
    expect(romanNumeralsService.convertFromArabic(3)).toBe('III');
  });
});
