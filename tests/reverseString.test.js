const reverseString = require('../reverseString')

describe('reverseString', () => {
  it('reversed the string successfully',() => {
    expect(reverseString('yes')).toEqual('sey');
  });
})