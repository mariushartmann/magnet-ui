// system imports
import React, { useCallback, useMemo, useRef } from "react";
import clsx from "clsx";

// internal imports
import { MagnetIcon } from "../icon";

// component imports
import { INavBarLinkProps } from "./navBar.types";
import { useRipple } from "../../hooks/useRipple";

export const NavBarLink = ({
    active = false,
    children = undefined,
    className = undefined,
    disabled = false,
    icon,
    id = undefined,
    onClick = undefined,
    style = undefined
}: React.PropsWithChildren<INavBarLinkProps>): JSX.Element => {
    // Vars & States - START
    const innerRef = useRef(null);
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
            "magnet-nav-bar-link": true,
            "magnet-nav-bar-link--active": active,
            "magnet-nav-bar-link--disabled": disabled
        };

        return clsx([classes, className]);
    }, [active, className, disabled]);

    const styles = useMemo((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...style };
    }, [style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    useRipple(innerRef, { disabled });
    // Life Cycle Hooks - END

    // Render - START
    return (
        <button
            id={id}
            className={classes}
            style={styles}
            onClick={handleClick}
            ref={innerRef}
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
