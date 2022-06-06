import romanNumeralsService from '../romanNumerals';

describe('arabic numerals to roman numerals conversion', () => {
  it('should return error message is number <1 or >10', () => {
    expect(romanNumeralsService.convertFromArabic(0).message).toBe(
      romanNumeralsService.invalidInputMessage,
    );
  });

  it.each`
    arabic  | roman
    ${1}    | ${'I'}
    ${2}    | ${'II'}
    ${3}    | ${'III'}
    ${4}    | ${'IV'}
    ${5}    | ${'V'}
    ${6}    | ${'VI'}
    ${7}    | ${'VII'}
    ${8}    | ${'VIII'}
    ${9}    | ${'IX'}
    ${10}   | ${'X'}
    ${11}   | ${'XI'}
    ${12}   | ${'XII'}
    ${14}   | ${'XIV'}
    ${15}   | ${'XV'}
    ${24}   | ${'XXIV'}
    ${187}  | ${'CLXXXVII'}
    ${255}  | ${'CCLV'}
    ${280}  | ${'CCLXXX'}
    ${423}  | ${'CDXXIII'}
    ${666}  | ${'DCLXVI'}
    ${978}  | ${'CMLXXVIII'}
    ${3999} | ${'MMMCMXCIX'}
  `('should return $roman when input is $arabic', ({arabic, roman}) => {
    expect(romanNumeralsService.convertFromArabic(arabic)).toBe(roman);
  });
});
