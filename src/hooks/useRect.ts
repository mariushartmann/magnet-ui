// System imports
import { useLayoutEffect, useCallback, useState } from "react";
import { isBrowser, off, on } from "../utils/window";

type RectResult = {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
};

function getRect<T extends HTMLElement>(element?: T): RectResult {
    let rect: RectResult = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0
    };
    if (element) {
        rect = element.getBoundingClientRect();
    }
    return rect;
}

export function useRect<T extends HTMLElement>(
    ref: React.RefObject<T> | null
): [RectResult, () => void] {
    const [rect, setRect] = useState<RectResult>(
        ref && ref.current ? getRect(ref.current) : getRect()
    );

    const handleResize = useCallback(() => {
        if (!ref || !ref.current) {
            return;
        }
        setRect(getRect(ref.current)); // Update client rect
    }, [ref]);

    useLayoutEffect(() => {
        if (!ref || !ref.current) {
            return;
        }

        const element = ref.current;

        handleResize();

        if (typeof ResizeObserver === "function") {
            let resizeObserver = new ResizeObserver(() => {
                handleResize();
            });
            resizeObserver.observe(element);
            return () => {
                if (!resizeObserver) {
                    return;
                }
                resizeObserver.disconnect();
                resizeObserver = null;
            };
        } else {
            if (isBrowser) {
                on(window, "scroll", handleResize);
                on(window, "resize", handleResize);
                return () => {
                    off(window, "scroll", handleResize);
                    off(window, "resize", handleResize);
                };
            }
        }
    }, [handleResize, ref]);

    return [rect, handleResize];
}
