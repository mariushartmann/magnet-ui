/// <reference types="react" />
declare type RectResult = {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
};
export declare function useRect<T extends HTMLElement>(ref: React.RefObject<T> | null): [RectResult, () => void];
export {};
