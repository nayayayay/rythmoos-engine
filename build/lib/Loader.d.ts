import { Game } from './Game';
export declare abstract class Loader {
    static basePath: string;
    private static _game;
    private static _loaded;
    private static _images;
    private static _videos;
    private static _audios;
    private static _json;
    private static _files;
    static _init(game: Game): void;
    static loadImage(fileName: string, filePath: string): void;
    static loadVideo(fileName: string, filePath: string): void;
    static loadAudio(fileName: string, filePath: string): void;
    static loadJSON(fileName: string, filePath: string): void;
    static image(fileName: string): HTMLImageElement | null;
    static video(fileName: string): HTMLVideoElement | null;
    static audio(fileName: string): HTMLAudioElement | null;
    static json(fileName: string): object | null;
    private static _fileLoaded();
}
