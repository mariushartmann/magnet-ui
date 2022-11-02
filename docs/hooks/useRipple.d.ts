import { RefObject } from "react";
export interface IRippleOptions {
    animationLength?: number;
    disabled?: boolean;
    rippleColor?: string;
    rippleSize?: number;
    excludedRefs?: RefObject<HTMLElement>[];
}
export declare const useRipple: (ref: RefObject<any>, options?: IRippleOptions) => void;
