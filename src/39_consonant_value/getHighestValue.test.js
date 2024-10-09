'use strict';

const { getHighestValue } = require('./getHighestValue');

describe(`Function 'getHighestValue':`, () => {
  it(`should be declared`, () => {
    expect(getHighestValue).toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof getHighestValue('strength')).toBe('number');
  });

  it(`should return 0 if a string contains only vowels`, () => {
    expect(getHighestValue('ieaou')).toBe(0);
  });

  it(`should return the value of a consonant if a string contains only one consonant`, () => {
    expect(getHighestValue('one')).toBe(14);
  });

  it(`should return the total value of all letters if a string contains only consonants`, () => {
    expect(getHighestValue('dfjktvg')).toBe(80);
  });

  it(`should return the value of a greater consonant if a string contains only two separated consonants`, () => {
    expect(getHighestValue('bake')).toBe(11);
  });

  it(`should return the value of a single consonant if it is greater than other groups of consonants`, () => {
    expect(getHighestValue('clay')).toBe(25);
  });

  it(`should return the value of the greatest group if it is at the beginning of the string`, () => {
    expect(getHighestValue('though')).toBe(28);
  });

  it(`should return the value of the greatest group if it is in the middle of the string`, () => {
    expect(getHighestValue('catchphrase')).toBe(73);
  });

  it(`should return the value of the greatest group if it is at the end of the string`, () => {
    expect(getHighestValue('whilst')).toBe(51);
  });

  it(`should return the value of any of the greatest groups if they have equal values`, () => {
    expect(getHighestValue('almuafseebc')).toBe(25);
  });

  it(`should work with a long sting`, () => {
    const str =
      'hfaowurioagqbgebobuqoefogcrpizugouuevaaixpgzzebfetopirijiuopsimueiieoresaajeeisidaerouuubkbefguieeiujodizmujhueutlalapleoxoiaomfguedixoaaotemeisoeukwuoiuyojezfecpiaiqiaikexeiiioiouaqezrxiayulseniuapuaexubouehoqueniaizuoieouaeiwjuejhuuoyiaeroyueeuedxmeicuauxeaniblualuetneoeeoipehbtylouphavnouodhibeufweqbeaksuokoxwxouoeiounajyuynhoeaiuiecaeibouluxowmaflhdzeiylzpotobcimpehcsbdlicfeuuaoiajioizofsaaoonipxpeouaioaxujafaoaiaozuoowuwbrxiveaauoeeuoaieujdjkaieuulhuieyuyucmobexeaoieucworookioooeyfrlevasouuuzesuveeuooupeccumumamuqauoioewliiaioupouheliouapusliiitueovuoasjicatsowawxuiannoeaioeaixdbihpueiaaceoeiguiofroououaayebosueujooodneaoaeuqauaicmierouwvajoezkihcyxit';

    expect(getHighestValue(str)).toBe(99);
  });

  it(`should return 0 if input is an empty string`, () => {
    expect(getHighestValue('')).toBe(0);
  });
});
