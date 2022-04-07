const calculator = require('../calculator');

describe('sum', () => {
  it('Display an error if the any of the values is not a number', () => {
    expect(() => calculator.add(1,2,'g')).toThrow(Error);
  });

  it('Display an error if there is only one value', () => {
    expect(() => calculator.add(3)).toThrow(Error);
  });

  it('Display the sum of each of the values passed', () => {
    expect(calculator.add(3,5,4)).toEqual(12);
  });
});

describe('subtract', () => {
  it('Display an error if the any of the values is not a number', () => {
    expect(() => calculator.subtract('h',2,8)).toThrow(Error);
  });

  it('Display an error if there is only one value', () => {
    expect(() => calculator.subtract(5)).toThrow(Error);
  });

  it('Display the subtraction of each of the values passed', () => {
    expect(calculator.subtract(3,5,4)).toEqual(-6);
  });
});

describe('division', () => {
  it('Display an error if the any of the values is not a number', () => {
    expect(() => calculator.divide(2,8,'c')).toThrow(Error);
  });

  it('Display an error if there is only one value', () => {
    expect(() => calculator.divide(8)).toThrow(Error);
  });

  it('Display the subtraction of each of the values passed', () => {
    expect(calculator.divide(10,2,3)).toEqual('1.67');
  });
});

describe('multiplication', () => {
  it('Display an error if the any of the values is not a number', () => {
    expect(() => calculator.multiply(2,'m',12)).toThrow(Error);
  });

  it('Display an error if there is only one value', () => {
    expect(() => calculator.multiply(7)).toThrow(Error);
  });

  it('Display the subtraction of each of the values passed', () => {
    expect(calculator.multiply(10,5,2)).toEqual(100);
  });
});