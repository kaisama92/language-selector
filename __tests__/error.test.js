import isError from "../src/error.js";

describe('isError', () => {

  test('should determine if any input out of 5 inputs is NaN', () => {
    let input1 = 0;
    let input2 = 1;
    let input3 = 2;
    let input4 = 3;
    let input5 = 4;
    let error = isError(input2, input3, input1, input5, input4);
    expect(error).toEqual(true);
  });

  test('should determine if all of the inputs are numbers greater than 0', () => {
    let input1 = 5;
    let input2 = 1;
    let input3 = 2;
    let input4 = 3;
    let input5 = 4;
    let error = isError(input2, input3, input1, input5, input4);
    expect(error).toEqual(false);
  });
})