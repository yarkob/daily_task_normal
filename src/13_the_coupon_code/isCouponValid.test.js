'use strict';

const { isCouponValid } = require('./isCouponValid');

describe(`Function 'isCouponValid':`, () => {
  it(`should be declared`, () => {
    expect(isCouponValid).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(
      typeof isCouponValid('001', '100', 'July 9, 2020', 'July 1, 2020'),
    ).toBe('boolean');
  });

  it(`should return 'false' if type of entered code is different from the type of valid code`, () => {
    expect(
      isCouponValid(99999999, '99999999', 'March 19, 2020', 'March 19, 2020'),
    ).toBeFalsy();
  });

  it(`should return 'false' if entered code does not match the correct code`, () => {
    expect(
      isCouponValid('10', '100', 'September 1, 2019', 'September 10, 2019'),
    ).toBeFalsy();
  });

  it(`should return 'false' if expiration date is a day before the current date`, () => {
    expect(
      isCouponValid('145a', '145a', 'May 12, 2020', 'May 11, 2020'),
    ).toBeFalsy();
  });

  it(`should return 'false' if expiration date is a month before the current date`, () => {
    expect(
      isCouponValid('145a', '145a', 'May 12, 2020', 'April 12, 2020'),
    ).toBeFalsy();
  });

  it(`should return 'true' if expiration date is equal to the current date`, () => {
    expect(
      isCouponValid(
        'greatCoupon',
        'greatCoupon',
        'April 30, 2020',
        'April 30, 2020',
      ),
    ).toBeTruthy();
  });

  it(`should return 'true' if expiration date is day after the current date`, () => {
    expect(
      isCouponValid('coupon45', 'coupon45', 'April 29, 2020', 'April 30, 2020'),
    ).toBeTruthy();
  });

  it(`should return 'true' if expiration date is month after the current date`, () => {
    expect(
      isCouponValid('coupon45', 'coupon45', 'April 29, 2020', 'May 29, 2020'),
    ).toBeTruthy();
  });
});
