export declare function componentToHex(c: number): string;
export declare function rgbToHex(r: number, g: number, b: number): string;
export declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
} | null;
export declare function rgbToHsl(r: number, g: number, b: number): number[];
export declare function hslToHex(h: number, s: number, l: number): string;
