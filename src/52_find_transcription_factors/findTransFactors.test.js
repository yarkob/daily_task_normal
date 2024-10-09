'use strict';

const { findTransFactors } = require('./findTransFactors');

describe(`Function 'findTransFactors':`, () => {
  it(`should be declared`, () => {
    expect(findTransFactors).toBeInstanceOf(Function);
  });

  it(`should return an object`, () => {
    expect(typeof findTransFactors('')).toBe('object');
  });

  it(`should return the object consisting of the transcription factor that bind and the binding position in the sequence when it's the only one`, () => {
    expect(findTransFactors('TGCGTG')).toEqual({ AhR: [1] });
  });

  it(`should return the object consisting of the transcription factors that bind and the binding positions in the sequence`, () => {
    const seq = 'CACGTGACGT';

    expect(findTransFactors(seq)).toEqual({ ATF6: [5], cMyc: [1] });
  });

  it(`should return the object consisting of the transcription factors that bind and the binding positions in the sequence that contains all the transcription factors`, () => {
    const seq = 'TGACGTTGACGCACACGTGGATTTGCGTG';

    expect(findTransFactors(seq)).toEqual({
      ATF6: [1],
      CREB: [7],
      cMyc: [14],
      Gata1: [20],
      AhR: [24],
    });
  });

  it(`should return the object consisting of the transcription factors that bind and repeated and the binding positions in the sequence`, () => {
    const seq =
      'GATTCGGCGGACATGGCGGCTCAGATCACCAAGCGCAAGTGGGAGGCGGCCCATGAGGCGGAGCAGTTGAGAGCCTACCTGGATGGCACGTGCGTGGAGTGGCTCCGCAGATACCTGGAGAACGGGAAGGAGACGCTGCAGCGCACGGACCCCCCCAAGACACATATGACCCACCACCCCATCTCTGACCATGAGGCCACCCTGAGGTGCTGGGCCCTGGGCTTCTACCCTGCGGAGATCACACTGACCTGGCAGCGGGATGGGGAGGACCAGACCCAGGACACGGAGCTCGTGGAGACCAGGCCTGCAGGGGATGGAACCTTCCAGAAGTGGGCGGCTGTGGTGGTGCCTTCTGGAGAGGAGCAGAGATACACCTGCCATGTGCAGCATGAGGGTCTGCCCAAGCCCCTCACCCTGAGATGGGAGCTGTCTTCCCAGCCCACCATCCCCATCGTGGGCATCATTGCTGGCCTGGTTCTCCTTGGAGCTGTGATCACTGGAGCTGTGGTCGCTGCCGTGATGTGGAGGAGGAAGAGCTCAGATAGAAAAGGAGGGAGTTACACTCAGGCTGCAAGCAGTGACAGTGCCCAGGGCTCTGATGTGTCCCTCACAGCTTGTAAAGTGTGACACGTG';

    expect(findTransFactors(seq)).toEqual({
      cMyc: [87, 628],
      Gata1: [1],
      AhR: [91],
    });
  });

  it(`should return an empty object when there are no transcription factors that bind in the sequence`, () => {
    const seq =
      'ATGGCCGTCATGGCGCCCCGAACCCTCCTCCTGCTACTCTCGGGGGCCCTGGCCCTGACCCAGACCTGGGCGGGCTCCCACTCCATGAGGTATTTCTTCACATCCGTGTCCCGGCCCGGCCGCGGGGAGCCCCGCTTCATCGCCGTGGGCTACGTGGACGACACGCAGTTCGTGCGGTTCGACAGCGACGCCGCGAGCCAGAGGATGGAGCCGCGGGCGCCGTGGATAGAGCAGGAGGGGCCGGAGTATTGGGACCAGGAGACACGGAATGTGAAGGCCC';

    expect(findTransFactors(seq)).toEqual({});
  });

  it(`should return an empty object when the sequence is too short`, () => {
    const seq = 'ACGT';

    expect(findTransFactors(seq)).toEqual({});
  });

  it(`should return an empty object when the sequence is empty`, () => {
    expect(findTransFactors('')).toEqual({});
  });
});
