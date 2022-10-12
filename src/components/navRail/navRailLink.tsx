// system imports
import React, { useCallback, useMemo } from "react";
import clsx from "clsx";

// internal imports
import { MagnetIcon } from "../icon";

// component imports
import { INavRailLinkProps } from "./navRail.types";

export const NavRailLink = ({
    active = false,
    children = undefined,
    className = undefined,
    disabled = false,
    icon,
    id = undefined,
    onClick = undefined,
    style = undefined
}: React.PropsWithChildren<INavRailLinkProps>) => {
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
            "magnet-nav-rail-link": true,
            "magnet-nav-rail-link--active": active,
            "magnet-nav-rail-link--disabled": disabled
        };

        return clsx([classes, className]);
    }, [active, className, disabled]);

    const styles = useMemo((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...style };
    }, [style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    // useRipple(innerRef);
    // Life Cycle Hooks - END

    // Render - START
    return (
        <button
            id={id}
            className={classes}
            style={styles}
            onClick={handleClick}
        >
            <MagnetIcon className="magnet-nav-rail-link--icon">
                {icon}
            </MagnetIcon>
            <span className="magnet-nav-rail-link--label">{children}</span>
        </button>
    );
};

NavRailLink.displayName = "NavRailLink";

const MagnetNavRailLink = React.memo(NavRailLink);

MagnetNavRailLink.displayName = "MagnetNavRailLink";

export { MagnetNavRailLink };
