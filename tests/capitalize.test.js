const capitalize = require('../capitalize')

describe('change a string', () => {
  it('capitalize the 1st letter of a string', () => {
    expect(capitalize('dragon')).toEqual('Dragon')
  })
})