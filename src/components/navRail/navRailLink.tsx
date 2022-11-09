// system imports
import React, { useCallback, useMemo, useRef } from "react";
import clsx from "clsx";

// internal imports
import { MagnetIcon } from "../icon";
import { useRipple } from "../../hooks/useRipple";
import { useCombinedRefs } from "../../hooks/useCombinedRefs";

// component imports
import { INavRailLinkProps } from "./navRail.types";

export const NavRailLink = React.forwardRef<
    HTMLAnchorElement | HTMLButtonElement,
    React.PropsWithChildren<INavRailLinkProps>
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
        }: React.PropsWithChildren<INavRailLinkProps>,
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
                <MagnetIcon className="magnet-nav-rail-link--icon">
                    {icon}
                </MagnetIcon>
                <span className="magnet-nav-rail-link--label">{children}</span>
            </>
        );
    }
);

NavRailLink.displayName = "NavRailLink";

const MagnetNavRailLink = React.memo(NavRailLink);

MagnetNavRailLink.displayName = "MagnetNavRailLink";

export { MagnetNavRailLink };
