// System imports
import React, { useCallback, useEffect } from "react";

// Internal imports
import { off, on } from "../utils/window";

export const useOutsideClick = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.MutableRefObject<any>,
    visible: boolean,
    onOutsideClick: () => void,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ignore?: React.MutableRefObject<any>[]
): void => {
    const handleClick = useCallback(
        (event) => {
            // STOP, if click event is on the ignore list
            if (ignore) {
                for (let i = 0; i < ignore.length; i++) {
                    if (ignore[i].current.contains(event.target)) {
                        return;
                    }
                }
            }

            if (ref.current && !ref.current.contains(event.target)) {
                if (onOutsideClick) {
                    onOutsideClick();
                }
                return;
            }
        },
        [ignore, onOutsideClick, ref]
    );

    useEffect(() => {
        // only add the event listener when the ref is visible
        if (!visible) {
            return;
        }

        if (typeof document !== "undefined") {
            on(document, "click", handleClick);

            return () => {
                off(document, "click", handleClick);
            };
        }
    }, [handleClick, visible]);
};
