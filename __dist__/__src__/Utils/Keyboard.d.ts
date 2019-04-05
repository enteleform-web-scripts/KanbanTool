export declare class Keyboard {
    static bind(hotKeys: string | string[], options?: {
        preventDefault: boolean;
    }): any;
    static bind(hotKeys: string | string[], callback: ((event: KeyboardEvent) => void), options?: {
        preventDefault: boolean;
    }): any;
}
