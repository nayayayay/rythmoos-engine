const { expect } = require('chai');
const { Scene, Shape } = require('./lib');

describe('Scene spec', () => {
  const scene = new Scene();
  const shape = new Shape(
    'qwerty',
    {
      x: 0,
      y: 0
    },
    '#000000',
    false
  );

  it('should register a new shape', () => {
    scene.addShape(shape);

    expect(scene.shapes.indexOf(shape)).to.not.equal(-1);
  });

  it('should remove a shape', () => {
    scene.removeShape(shape.name);

    expect(scene.shapes.indexOf(shape)).to.equal(-1);
  });
});
