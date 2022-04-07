const stringLength = require('../stringLength')

describe('stringLength', () => {
  it('the string size',() => {
    expect(stringLength('awesome')).toEqual(7);
  });

  it('empty string',() => {
    expect(() => stringLength('')).toThrow(Error);
  });

  it('long string',() => {
    expect(() => stringLength('This is long')).toThrow();
  })
})