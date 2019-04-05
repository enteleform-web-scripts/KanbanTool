export declare class Keyboard {
    static bind(hotKeys: string | string[]): any;
    static bind(hotKeys: string | string[], callback: KeyBinding_Callback): any;
}
declare type KeyBinding_Callback = (event: KeyboardEvent) => void;
export {};
