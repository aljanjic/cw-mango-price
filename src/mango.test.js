const mango = require('./mango');

describe('mango', () => {
  it('3,3 should be 6', () => {
    expect(mango(3,3)).toBe(6);
  });
  it('9,5 should be 30', () => {
    expect(mango(9,5)).toBe(30);
  });

});
