// system imports
import React, { useCallback } from "react";
import clsx from "clsx";

// internal imports
import { MagnetIcon } from "../icon";

// component imports
import { INavBarLinkProps } from "./navBar.types";

export const NavBarLink = ({
    active = false,
    children = undefined,
    className = undefined,
    disabled = false,
    icon,
    id = undefined,
    onClick = undefined,
    style = undefined
}: React.PropsWithChildren<INavBarLinkProps>) => {
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
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-nav-bar-link": true,
            "magnet-nav-bar-link--active": active,
            "magnet-nav-bar-link--disabled": disabled
        };

        return clsx([classes, className]);
    }, [active, className, disabled]);

    const getStyles = useCallback((): React.CSSProperties => {
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
            className={getClasses()}
            style={getStyles()}
            onClick={handleClick}
        >
            <MagnetIcon className="magnet-nav-bar-link--icon">
                {icon}
            </MagnetIcon>
            <span className="magnet-nav-bar-link--label">{children}</span>
        </button>
    );
};

NavBarLink.displayName = "NavBarLink";

const MagnetNavBarLink = React.memo(NavBarLink);

MagnetNavBarLink.displayName = "MagnetNavBarLink";

export { MagnetNavBarLink };
