'use strict';

const { validateIP } = require('./validateIP');

describe(`Function 'validateIP':`, () => {
  it(`should be declared`, () => {
    expect(validateIP).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof validateIP('12.34.56.78')).toBe('boolean');
  });

  it(`should return true if 'str' contains 4 octets of zeroes`, () => {
    expect(validateIP('0.0.0.0')).toBe(true);
  });

  it(`should return true if 'str' contains 4 octets of values between 0 and 255`, () => {
    expect(validateIP('15.250.32.61')).toBe(true);
  });

  it(`should return true if 'str' contains 4 octets of 255`, () => {
    expect(validateIP('255.255.255.255')).toBe(true);
  });

  it(`should return false if 'str' is empty`, () => {
    expect(validateIP('')).toBe(false);
  });

  it(`should return false if octets consist of letters`, () => {
    expect(validateIP('abc.def.ghi.jkl')).toBe(false);
  });

  it(`should return false if octets consist of numbers and letters`, () => {
    expect(validateIP('1a1.2b2.3c3.4d4')).toBe(false);
  });

  it(`should return false if 'str' contains an octet greater than 255`, () => {
    expect(validateIP('24.256.78.234')).toBe(false);
  });

  it(`should return false if 'str' contains an octet with a negative number`, () => {
    expect(validateIP('212.101.56.-47')).toBe(false);
  });

  it(`should return false if 'str' contains less than 4 octets`, () => {
    expect(validateIP('111.22.3')).toBe(false);
  });

  it(`should return false if 'str' contains more than 4 octets`, () => {
    expect(validateIP('11.22.33.44.55')).toBe(false);
  });

  it(`should return false if 'str' contains an octet that starts with zero and consists of more than one digit`, () => {
    expect(validateIP('151.93.28.045')).toBe(false);
  });

  it(`should return false if octets are separated by commas`, () => {
    expect(validateIP('78,21,126,8')).toBe(false);
  });

  it(`should return false if octets contain spaces`, () => {
    expect(validateIP(' 56.21. 4.179')).toBe(false);
  });

  it(`should return false if octets contain break line symbolы`, () => {
    expect(validateIP('\n23.89.183.67\n')).toBe(false);
  });
});
