// system imports
import React, { useCallback, useMemo, useRef } from "react";
import clsx from "clsx";

// internal imports
import { MagnetIcon } from "../icon";
import { useCombinedRefs } from "../../hooks/useCombinedRefs";
import { useRipple } from "../../hooks/useRipple";

// component imports
import { INavBarLinkProps } from "./navBar.types";

export const NavBarLink = React.forwardRef<
    HTMLAnchorElement | HTMLButtonElement,
    React.PropsWithChildren<INavBarLinkProps>
>(
    (
        {
            active = false,
            children = undefined,
            className = undefined,
            disabled = false,
            href = undefined,
            icon,
            id = undefined,
            onClick = undefined,
            style = undefined
        }: React.PropsWithChildren<INavBarLinkProps>,
        forwardRef
    ) => {
        // Vars & States - START
        const tag = href ? "a" : "button";
        const innerRef = useRef(null);
        const combinedRefs = useCombinedRefs(forwardRef, innerRef);
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
        return React.createElement(
            tag,
            {
                id: id,
                className: classes,
                style: styles,
                onClick: handleClick,
                disabled: disabled,
                href: href,
                ref: combinedRefs
            },
            <>
                <MagnetIcon className="magnet-nav-bar-link--icon">
                    {icon}
                </MagnetIcon>
                <span className="magnet-nav-bar-link--label">{children}</span>
            </>
        );
    }
);

NavBarLink.displayName = "NavBarLink";

const MagnetNavBarLink = React.memo(NavBarLink);

MagnetNavBarLink.displayName = "MagnetNavBarLink";

export { MagnetNavBarLink };
