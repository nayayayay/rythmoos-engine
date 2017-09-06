/**
 * Represent a point in a 2D context.
 */
class Point {
  /** This Point's position in the X axis. */
  public x: number;
  /** This Point's position in the Y axis. */
  public y: number;

  /**
   * @param x The position in the X axis.
   * @param y The position in the Y axis.
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export default Point;
