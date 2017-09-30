const {expect} = require('chai');
const {Rotation} = require('../build/lib/geometry/Rotation');

describe('Rotation', () => {
  describe('Rotation#radiansToDegrees()', () => {
    it('should convert radians to degrees', () => {
      const fiftySeven = Math.round(Rotation.radiansToDegrees(1));
      const fortyFive = Math.round(Rotation.radiansToDegrees(0.785));

      expect(fiftySeven).to.equal(57);
      expect(fortyFive).to.equal(45);
    });
  });

  describe('Rotation#degreesToRadians()', () => {
    it('should convert degrees to radians', () => {
      const one = Math.round(Rotation.degreesToRadians(57));
      const pointFive = parseFloat(Rotation.degreesToRadians(28.6).toFixed(1));

      expect(one).to.equal(1);
      expect(pointFive).to.equal(0.5);
    });
  });
});
