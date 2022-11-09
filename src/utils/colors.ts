export function componentToHex(c: number): string {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex(r: number, g: number, b: number): string {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
} | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
          }
        : null;
}

export function rgbToHsl(r: number, g: number, b: number): number[] {
    const tmpR = (r /= 255);
    const tmpG = (g /= 255);
    const tmpB = (b /= 255);

    const max = Math.max(tmpR, tmpG, tmpB),
        min = Math.min(tmpR, tmpG, tmpB);
    let h, s;
    let l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case tmpR:
                h = (tmpG - tmpB) / d + (tmpG < tmpB ? 6 : 0);
                break;
            case tmpG:
                h = (tmpB - tmpR) / d + 2;
                break;
            case tmpB:
                h = (tmpR - tmpG) / d + 4;
                break;
        }

        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return [h, s, l];
}

function hue2rgb(p: number, q: number, t: number) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}

export function hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0"); // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}
