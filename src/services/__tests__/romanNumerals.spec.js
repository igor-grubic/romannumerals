import romanNumeralsService from '../romanNumerals';

describe('arabic numerals to roman numerals conversion', () => {
  it(`should return error message is number <${romanNumeralsService.MIN_NUMBER}} or >${romanNumeralsService.MAX_NUMBER}}`, () => {
    expect(romanNumeralsService.convertFromArabic(0).message).toBe(
      romanNumeralsService.invalidInputMessage,
    );
    expect(romanNumeralsService.convertFromArabic(4000000).message).toBe(
      romanNumeralsService.invalidInputMessage,
    );
  });

  it.each`
    arabic     | roman
    ${1}       | ${'I'}
    ${2}       | ${'II'}
    ${3}       | ${'III'}
    ${4}       | ${'IV'}
    ${5}       | ${'V'}
    ${6}       | ${'VI'}
    ${7}       | ${'VII'}
    ${8}       | ${'VIII'}
    ${9}       | ${'IX'}
    ${10}      | ${'X'}
    ${11}      | ${'XI'}
    ${12}      | ${'XII'}
    ${14}      | ${'XIV'}
    ${15}      | ${'XV'}
    ${24}      | ${'XXIV'}
    ${187}     | ${'CLXXXVII'}
    ${255}     | ${'CCLV'}
    ${280}     | ${'CCLXXX'}
    ${423}     | ${'CDXXIII'}
    ${666}     | ${'DCLXVI'}
    ${978}     | ${'CMLXXVIII'}
    ${3999}    | ${'MMMCMXCIX'}
    ${4000}    | ${'I̅V̅'}
    ${4627}    | ${'I̅V̅DCXXVII'}
    ${25000}   | ${'X̅X̅V̅'}
    ${80000}   | ${'L̅X̅X̅X̅'}
    ${200000}  | ${'C̅C̅'}
    ${1234567} | ${'M̅C̅C̅X̅X̅X̅I̅V̅DLXVII'}
    ${3987654} | ${'M̅M̅M̅C̅M̅L̅X̅X̅X̅V̅I̅I̅DCLIV'}
    ${3999999} | ${'M̅M̅M̅C̅M̅X̅C̅I̅X̅CMXCIX'}
  `('should return $roman when input is $arabic', ({arabic, roman}) => {
    expect(romanNumeralsService.convertFromArabic(arabic).message).toBe(roman);
  });
});
