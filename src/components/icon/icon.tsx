// system imports
import React, { useCallback } from "react";
import clsx from "clsx";

// internal imports

// component imports
import { IIconProps } from "./icon.types";

const Icon = ({
    children = undefined,
    className = undefined,
    id = undefined,
    size = 20,
    spin = false,
    style = undefined
}: React.PropsWithChildren<IIconProps>) => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-icon": true,
            "spin": spin
        };

        return clsx([classes, className]);
    }, [className, spin]);

    const getStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {
            minHeight: size,
            maxHeight: size,
            minWidth: size,
            maxWidth: size
        };

        return { ...styleList, ...style };
    }, [size, style]);

    const getIconStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {
            fontSize: size
        };

        return { ...styleList };
    }, [size]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    // Life Cycle Hooks - END

    // Render - START
    return (
        <span id={id} className={getClasses()} style={getStyles()}>
            <span className="material-symbols-rounded" style={getIconStyles()}>
                {children}
            </span>
        </span>
    );
};

Icon.displayName = "Icon";

const MagnetIcon = React.memo(Icon);

MagnetIcon.displayName = "MagnetIcon";

export { MagnetIcon };