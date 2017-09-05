const { expect } = require('chai');
const { Time } = require('./lib');

describe('Time spec', () => {
  it('should update the timers correctly', () => {
    Time._setFrame(10);

    expect(Time.time).to.equal(10);
    expect(Time.deltaTime).to.equal(10 - 0);
  });

  it('should get the right number of fps', () => {
    Time._setFrame(20);

    expect(Time.fps).to.equal(1000 / Time.deltaTime);
  });
});
