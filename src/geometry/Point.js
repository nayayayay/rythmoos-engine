/**
 * Represent a simple 2D point.
 */
export class Point {
  
  /**
   * Create a point.
   * @param {number} [x] The X position.
   * @param {number} [y] The Y position.
   */
  constructor(x=0, y=0) {

    /**
     * The X position.
     * @type {number}
     */
    this.x = x;

    /**
     * The Y position.
     * @type {number}
     */
    this.y = y;
  }
}
