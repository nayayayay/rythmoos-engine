const {expect} = require('chai');
const {Time} = require('../build/lib');

describe('Time', () => {
  describe('Time#deltaTime', () => {
    it('should evaluate to the right delta time', () => {
      Time._setFrame(10);
      expect(Time.deltaTime).to.equal(10);

      Time._setFrame(15);
      expect(Time.deltaTime).to.equal(5);
    });
  });

  describe('Time#time', () => {
    it('should equal the total time elapsed', () => {
      expect(Time.time).to.equal(15);
    });
  });

  describe('Time#lastTime', () => {
    it('shoud equal the last value of time', () => {
      expect(Time.lastTime).to.equal(10);

      Time._setFrame(45);
      expect(Time.lastTime).to.equal(15);
    });
  });

  describe('Time#FPS', () => {
    it('should evaluate to the right number of frames per second', () => {
      Time._setFrame(545);
      expect(Time.FPS).to.equal(2);
    });
  });
});
