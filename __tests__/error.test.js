import isError from "../src/error.js";

describe('isError', () => {

  test('should determine if input1 is not a number', () => {
    let input1 = 0;
    const error = isError(input1);
    expect(error).toEqual(true);
  });

  test('should determine if input1 is a number', () => {
    let input1 = 1;
    const error = isError(input1);
    expect(error).toEqual(false);
  });
})