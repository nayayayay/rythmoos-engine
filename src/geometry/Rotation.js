/**
 * Contain helpers to translate angles.
 * @abstract
 */
export class Rotation {

  /**
   * Convert radians to degrees.
   * @param {number} radians The angle in radians.
   * @return {number} The radians in degrees.
   */
  static radiansToDegrees(radians) {
    return radians * 180 / Math.PI;
  }

  /**
   * Convert degrees to radians.
   * @param {number} degrees The angle in degrees.
   * @return {number} The degrees in radians.
   */
  static degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
}
