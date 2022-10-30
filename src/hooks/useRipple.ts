// System imports
import { RefObject, useEffect } from "react";

// Internal imports
import { off, on } from "../utils/window";

export interface IRippleOptions {
    animationLength?: number;
    disabled?: boolean;
    rippleColor?: string;
    rippleSize?: number;
    excludedRefs?: RefObject<HTMLElement>[];
}

interface IRippleEvent {
    clientX?: number;
    clientY?: number;
    target: EventTarget | null;
}

const defaultEvent: Required<IRippleEvent> = {
    clientX: 0,
    clientY: 0,
    target: null
};

const createRipple = (element: HTMLElement, options: IRippleOptions) => {
    return (ev?: IRippleEvent) => {
        const isExcluded = (options.excludedRefs || []).some((ref) => {
            return (
                (!!ref.current && ref.current.contains(ev?.target as Node)) ||
                ref.current?.isSameNode(ev?.target as Node)
            );
        });

        if (isExcluded) {
            return;
        }

        const clientX = ev?.clientX || defaultEvent.clientX;
        const clientY = ev?.clientY || defaultEvent.clientY;

        const { height, width, top, left } = element.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;

        const rippleSize = options.rippleSize ?? Math.max(height, width);

        const positionTop = clientX
            ? y - rippleSize / 2
            : rippleSize / 2 - height / 2;
        const positionLeft = clientY
            ? x - rippleSize / 2
            : width / 2 - rippleSize / 2;

        const span = document.createElement("span");

        span.style.cssText = `
            top: ${positionTop}px;
            left: ${positionLeft}px;
            position: absolute;
            border-radius: 50%;
            border: 10px solid ${options.rippleColor};
            pointer-events: none;
            width: ${rippleSize}px;
            height: ${rippleSize}px;
            animation: use-ripple-animation ${options.animationLength}ms ease-in;
        `;

        element.appendChild(span);

        on(span, "animationend", () => {
            element.removeChild(span);
        });
    };
};

const defaultOptions: IRippleOptions = {
    animationLength: 1000,
    disabled: false,
    excludedRefs: [],
    rippleColor: "currentColor",
    rippleSize: undefined
};

export const useRipple = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: RefObject<any>,
    options?: IRippleOptions
): void => {
    useEffect(() => {
        const rippleOptions = { ...defaultOptions, ...options };

        if (rippleOptions.disabled || !ref?.current) {
            return;
        }

        const element = ref.current;
        const elementPosition =
            getComputedStyle(element).getPropertyValue("position");

        element.style.position =
            elementPosition === "static" || !elementPosition
                ? "relative"
                : elementPosition;
        element.style.overflow = "hidden";

        const ripple = createRipple(element, rippleOptions);

        const keyboardRipple = (ev: KeyboardEvent) => {
            if (ev.key === "Enter" || ev.key === " ") {
                ripple();
            }
        };

        on(element, "mousedown", ripple);
        on(element, "keydown", keyboardRipple);

        return () => {
            off(element, "mousedown", ripple);
            off(element, "keydown", keyboardRipple);
        };
    }, [options, ref]);
};
