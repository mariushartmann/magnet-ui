// system imports
import React, { useCallback, useMemo } from "react";
import clsx from "clsx";

// internal imports

// component imports
import { IIconProps } from "./icon.types";

const Icon = ({
    children = undefined,
    className = undefined,
    disabled = false,
    id = undefined,
    onClick = undefined,
    size = 20,
    style = undefined
}: React.PropsWithChildren<IIconProps>) => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    const handleClick = useCallback(
        (ev: React.MouseEvent<HTMLElement, MouseEvent>) => {
            if (!disabled && onClick) {
                onClick(ev);
            }
        },
        [disabled, onClick]
    );
    // Methods & Handler - END

    // ClassNames & Styles - START
    const classes = useMemo(() => {
        const classes = {
            "magnet-icon": true,
            "magnet-icon--link": onClick !== undefined
        };

        return clsx([classes, className]);
    }, [className, onClick]);

    const styles = useMemo((): React.CSSProperties => {
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
        <span id={id} className={classes} style={styles} onClick={handleClick}>
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
