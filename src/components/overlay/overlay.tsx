// system imports
import React, { useCallback } from "react";
import clsx from "clsx";
import { Portal } from "react-portal";

// internal imports

// component imports
import { IOverlayProps } from "./overlay.types";

export const Overlay = ({
    absolute = false,
    className,
    color = undefined,
    id = undefined,
    onClick = undefined,
    opacity = 0.5,
    style,
    value = false,
    zIndex = 5
}: IOverlayProps): JSX.Element => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    const handleClick = useCallback(
        (ev: React.MouseEvent<HTMLElement>) => {
            if (onClick) {
                onClick(ev);
            }
        },
        [onClick]
    );
    // Methods & Handler - END

    // ClassNames & Styles - START
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-overlay": true,
            "magnet-overlay--absolute": absolute,
            "magnet-overlay--show": value
        };

        return clsx([classes, className]);
    }, [absolute, className, value]);

    const getStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        styleList.backgroundColor = color;
        styleList.opacity = value ? opacity : undefined;
        styleList.zIndex = zIndex;

        return { ...styleList, ...style };
    }, [color, opacity, style, value, zIndex]);
    // Life Cycle Hooks - END

    // Render - START
    const renderOverlay = useCallback(() => {
        return (
            <div
                id={id}
                className={getClasses()}
                style={getStyles()}
                onClick={handleClick}
            ></div>
        );
    }, [getClasses, getStyles, handleClick, id]);

    return absolute ? (
        renderOverlay()
    ) : (
        <Portal
            node={
                typeof document !== "undefined" &&
                document.getElementById("magnet-app")
            }
        >
            {renderOverlay()}
        </Portal>
    );
};

Overlay.displayName = "Overlay";

const MagnetOverlay = React.memo(Overlay);

MagnetOverlay.displayName = "MagnetOverlay";

export { MagnetOverlay };
