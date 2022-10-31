// system imports
import React, { useCallback, useContext, useMemo, useRef } from "react";
import clsx from "clsx";

// internal imports
import { ThemeContext } from "../app";
import { MagnetIcon } from "../icon";

// component imports
import { IListItemProps } from "./list.types";
import { useCombinedRefs } from "../../hooks/useCombinedRefs";
import { useRipple } from "../../hooks/useRipple";

export const ListItem = React.forwardRef<
    HTMLAnchorElement | HTMLElement,
    React.PropsWithChildren<IListItemProps>
>(
    (
        {
            active = false,
            appendIcon = undefined,
            children = undefined,
            className = undefined,
            color = undefined,
            disabled = false,
            href = undefined,
            id = undefined,
            onClick = undefined,
            prependIcon = undefined,
            style = undefined,
            target = undefined,
            theme = "auto"
        }: React.PropsWithChildren<IListItemProps>,
        forwardRef
    ) => {
        // Vars & States - START
        const tag = href ? "a" : "div";
        const globalTheme = useContext(ThemeContext);
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
                "magnet-list-item": true,
                "magnet-list-item--active": active,
                "magnet-list-item--clickable": href || onClick,
                "magnet-list-item--disabled": disabled,
                "magnet-list-item--primary": color && color === "primary",
                "magnet-list-item--secondary": color && color === "secondary",
                "magnet-list-item--success": color && color === "success",
                "magnet-list-item--warning": color && color === "warning",
                "magnet-list-item--error": color && color === "error",
                "theme-light":
                    theme === "light" ||
                    (theme === "auto" && globalTheme === "light"),
                "theme-dark":
                    theme === "dark" ||
                    (theme === "auto" && globalTheme === "dark")
            };

            return clsx([classes, className]);
        }, [
            active,
            className,
            color,
            disabled,
            globalTheme,
            href,
            onClick,
            theme
        ]);

        const styles = useMemo((): React.CSSProperties => {
            const styleList: React.CSSProperties = {};

            return { ...styleList, ...style };
        }, [style]);
        // ClassNames & Styles - END

        // Life Cycle Hooks - START
        useRipple(innerRef, { disabled: disabled || (!href && !onClick) });
        // Life Cycle Hooks - END

        // Render - START
        const renderInner = useCallback(() => {
            return <div className="magnet-list-item--inner">{children}</div>;
        }, [children]);

        return React.createElement(
            tag,
            {
                id: id,
                className: classes,
                style: styles,
                onClick: handleClick,
                disabled: disabled,
                href: href,
                ref: combinedRefs,
                target: target,
                rel: target ? "noreferrer" : undefined
            },
            <>
                {prependIcon && (
                    <MagnetIcon className="ml-4">{prependIcon}</MagnetIcon>
                )}
                {renderInner()}
                {appendIcon && (
                    <MagnetIcon className="mr-4">{appendIcon}</MagnetIcon>
                )}
            </>
        );
    }
);

ListItem.displayName = "ListItem";

const MagnetListItem = React.memo(ListItem);

MagnetListItem.displayName = "MagnetListItem";

export { MagnetListItem };
