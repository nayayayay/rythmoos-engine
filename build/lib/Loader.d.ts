import { Game } from './Game';
/**
 * The loader is an easy way to preload all the required assets for your game.<br>
 * You can use it from the load() method of your Game class.<br>
 * It can also be used while the game is running to load assets on the fly.
 */
export declare abstract class Loader {
    /** The base path to the assets directory. */
    static basePath: string;
    private static _game;
    private static _loaded;
    private static _images;
    private static _videos;
    private static _audios;
    private static _json;
    private static _files;
    /**
     * Used internally to preload the game and its assets.
     * @param game The game instance.
     */
    static _init(game: Game): void;
    /**
     * Load an image file.<br>
     * If the file can't be loaded, the game won't start and a message will
     * be logged to the console.
     * @param fileName The name to save this file as in the loader.
     * @param filePath The path to the file to load.
     */
    static loadImage(fileName: string, filePath: string): void;
    /**
     * Load a video file.<br>
     * If the file can't be loaded, the game won't start and a message will
     * be logged to the console.
     * @param fileName The name to save this file as in the loader.
     * @param filePath The path to the file to load.
     */
    static loadVideo(fileName: string, filePath: string): void;
    /**
     * Load an audio file.<br>
     * If the file can't be loaded, the game won't start and a message will
     * be logged to the console.
     * @param fileName The name to save this file as in the loader.
     * @param filePath The path to the file to load.
     */
    static loadAudio(fileName: string, filePath: string): void;
    /**
     * Load a json file.<br>
     * If the file can't be loaded, the game won't start and a message will
     * be logged to the console.
     * @param fileName The name to save this file as in the loader.
     * @param filePath The path to the file to load.
     */
    static loadJSON(fileName: string, filePath: string): void;
    /**
     * Get a file from the loader.<br>
     * If the file was loaded on the fly, it may not be ready yet! You can
     * check whether the file was loaded or not using the loaded() method.
     * @param fileName The name of the file to get.
     * @return The file, or null if the Loader does not contain the specified file.
     */
    static get(fileName: string): HTMLImageElement | HTMLAudioElement | HTMLVideoElement | object | null;
    /**
     * Get an image that was loaded.<br>
     * If the image was loaded on the fly, it may not be ready yet! You can
     * check whether the file was loaded or not using the loaded() method.
     * @param fileName The name of the file to get.
     * @return The image file, or null if the image was not loaded using loadImage().
     */
    static image(fileName: string): HTMLImageElement | null;
    /**
     * Get a video that was loaded.<br>
     * If the video was loaded on the fly, it may not be ready yet! You can
     * check whether the file was loaded or not using the loaded() method.
     * @param fileName The name of the file to get.
     * @return The video file, or null if the video was not loaded using loadVideo().
     */
    static video(fileName: string): HTMLVideoElement | null;
    /**
     * Get a audio that was loaded.<br>
     * If the audio was loaded on the fly, it may not be ready yet! You can
     * check whether the file was loaded or not using the loaded() method.
     * @param fileName The name of the file to get.
     * @return The audio file, or null if the audio was not loaded using loadAudio().
     */
    static audio(fileName: string): HTMLAudioElement | null;
    /**
     * Get a JSON file that was loaded.<br>
     * If the JSON file was loaded on the fly, it may not be ready yet! You can
     * check whether the file was loaded or not using the loaded() method.
     * @param fileName The name of the file to get.
     * @return The parsed JSON file, or null if the JSON file was not loaded using loadJSON().
     */
    static json(fileName: string): object | null;
    /**
     * Check whether a file is ready to be used or not.
     * @param fileName The file to check.
     */
    static loaded(fileName: string): boolean;
    private static _fileLoaded();
}
