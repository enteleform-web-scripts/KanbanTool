export declare class KeyBinding {
    static add(hotKeys: string | string[], options?: {
        preventDefault: boolean;
    }): any;
    static add(hotKeys: string | string[], callback: ((event: KeyboardEvent) => void), options?: {
        preventDefault: boolean;
    }): any;
}
