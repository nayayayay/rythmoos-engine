/**
 * Contain the game objects to update and render.
 */
export class Scene {

  /**
   * Create a Scene.
   */
  constructor() {

    /**
     * The game objects contained in the scene.
     * @type {GameObject[]}
     */
    this.gameObjects = [];
  }

  /**
   * Add game objects to the scene.
   * @param {GameObject} gameObject A game object to add to the scene.
   * @param {...GameObject} [otherGameObjects] More game objects to add.
   */
  add(gameObject, ...otherGameObjects) {
    this.gameObjects.push(gameObject);

    for (const other of otherGameObjects) {
      this.add(other);
    }
  }

  /**
   * Check whether the given game object is in the scene or not.
   * @param {GameObject} gameObject The game object to check.
   */
  contains(gameObject) {
    return this.gameObjects.indexOf(gameObject) !== -1;
  }

  /**
   * Remove game objects from the scene.
   * @param {GameObject} gameObject A game object to remove from the scene.
   * @param {...GameObject} [otherGameObjects] More game objects to remove.
   */
  remove(gameObject, ...otherGameObjects) {
    const index = this.gameObjects.indexOf(gameObject);

    if (index !== -1) {
      this.gameObjects.splice(index, 1);
    }

    for (const other of otherGameObjects) {
      this.remove(other);
    }
  }

  /**
   * Run before each frame is rendered.<br>
   * For post updating, see {@link Scene#afterUpdate}.
   */
  update() {
  }

  /**
   * Run after each frame is rendered.<br>
   * For pre updating, see {@link Scene#update}
   */
  afterUpdate() {
  }

  /**
   * Used internally to update the scene and its game objects.
   * @ignore
   */
  _runUpdate() {
    this.update();

    for (const gameObject of this.gameObjects) {
      gameObject.update();
    }
  }

  /**
   * Used internally to post update the scene and its game objects.
   * @ignore
   */
  _runAfterUpdate() {
    for (const gameObject of this.gameObjects) {
      gameObject.afterUpdate();
    }

    this.afterUpdate();
  }
}
