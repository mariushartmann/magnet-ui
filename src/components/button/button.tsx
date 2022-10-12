// system imports
import React, { useCallback, useContext, useMemo, useRef } from "react";
import clsx from "clsx";

// internal imports
import { ThemeContext } from "../app";
import { MagnetIcon } from "../icon";
import { MagnetProgressSpinner } from "../progressSpinner";

// component imports
import { IButtonProps } from "./button.types";
import { useCombinedRefs } from "../../utils/useCombinedRefs";

export const Button = React.forwardRef<
    HTMLAnchorElement | HTMLButtonElement,
    React.PropsWithChildren<IButtonProps>
>(
    (
        {
            appendIcon = undefined,
            block = false,
            children = undefined,
            className = undefined,
            color = "primary",
            disabled = false,
            href = undefined,
            icon = false,
            id = undefined,
            loading = false,
            onClick = undefined,
            prependIcon = undefined,
            size = "medium",
            style = undefined,
            theme = "auto",
            type = "button",
            variant = "filled"
        }: React.PropsWithChildren<IButtonProps>,
        forwardRef
    ) => {
        // Vars & States - START
        const tag = href ? "a" : "button";
        const globalTheme = useContext(ThemeContext);
        const innerRef = useRef(null);
        const combinedRefs = useCombinedRefs(forwardRef, innerRef);
        // Vars & States - END

        // Methods & Handler - START
        const handleClick = useCallback(
            (ev: React.MouseEvent<HTMLElement, MouseEvent>) => {
                if (!disabled && !loading && onClick) {
                    onClick(ev);
                }
            },
            [disabled, loading, onClick]
        );
        // Methods & Handler - END

        // ClassNames & Styles - START
        const classes = useMemo(() => {
            const classes = {
                "magnet-button": true,
                "elevation-1": variant === "elevated" && !disabled,
                "magnet-button--elevated": variant === "elevated",
                "magnet-button--filled": variant === "filled",
                "magnet-button--outlined": variant === "outlined",
                "magnet-button--text": variant === "text",
                "magnet-button--icon": icon,
                "magnet-button--block": block,
                "magnet-button--sm": size === "small",
                "magnet-button--md": size === "medium",
                "magnet-button--lg": size === "large",
                "magnet-button--disabled": disabled,
                "magnet-button--loading": loading,
                "magnet-button--primary": color && color === "primary",
                "magnet-button--secondary": color && color === "secondary",
                "magnet-button--success": color && color === "success",
                "magnet-button--warning": color && color === "warning",
                "magnet-button--error": color && color === "error",
                "theme-light":
                    theme === "light" ||
                    (theme === "auto" && globalTheme === "light"),
                "theme-dark":
                    theme === "dark" ||
                    (theme === "auto" && globalTheme === "dark")
            };

            return clsx([classes, className]);
        }, [
            block,
            className,
            color,
            disabled,
            globalTheme,
            icon,
            loading,
            size,
            theme,
            variant
        ]);

        const styles = useMemo((): React.CSSProperties => {
            const styleList: React.CSSProperties = {};

            return { ...styleList, ...style };
        }, [style]);
        // ClassNames & Styles - END

        // Life Cycle Hooks - START
        // useRipple(innerRef);
        // Life Cycle Hooks - END

        // Render - START
        const renderInner = useCallback(() => {
            return (
                <span className="magnet-button--inner">
                    {prependIcon && (
                        <MagnetIcon className="mr-2">{prependIcon}</MagnetIcon>
                    )}
                    {children}
                    {appendIcon && (
                        <MagnetIcon className="ml-2">{appendIcon}</MagnetIcon>
                    )}
                </span>
            );
        }, [appendIcon, children, prependIcon]);

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
                type: tag === "button" ? type : undefined
            },
            <>
                {renderInner()}
                {loading && <MagnetProgressSpinner />}
            </>
        );
    }
);

Button.displayName = "Button";

const MagnetButton = React.memo(Button);

MagnetButton.displayName = "MagnetButton";

export { MagnetButton };
