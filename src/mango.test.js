const mango = require('./mango');

describe('mango', () => {
  it('3,3 should be 6', () => {
    expect(mango(3,3)).toBe(6);
  });
  it('9,5 should be 30', () => {
    expect(mango(9,5)).toBe(30);
  });

  it('2, 3 should be 6', () => {
    expect(mango(2,3 )).toBe(6);
  });
  it('5, 3 should be 12', () => {
    expect(mango(5, 3 )).toBe(12);
  });

  it('0, 3 should be 0', () => {
    expect(mango(0, 3 )).toBe(0);
  });

});
