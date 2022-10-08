// system imports
import React, { useCallback, useContext } from "react";
import clsx from "clsx";

// internal imports
import { ThemeContext } from "../app";

// component imports
import { ICardProps } from "./card.types";

export const Card = React.forwardRef<
    HTMLAnchorElement,
    React.PropsWithChildren<ICardProps>
>(
    (
        {
            children = undefined,
            className = undefined,
            disabled = false,
            href = undefined,
            id = undefined,
            onClick = undefined,
            style = undefined,
            theme = "auto",
            variant = "elevated"
        }: React.PropsWithChildren<ICardProps>,
        ref
    ) => {
        // Vars & States - START
        const tag = href ? "a" : "div";
        const globalTheme = useContext(ThemeContext);
        // Vars & States - END

        // Methods & Handler - START
        const handleClick = useCallback(
            (ev: React.MouseEvent<HTMLElement, MouseEvent>) => {
                if (onClick && !disabled) {
                    onClick(ev);
                }
            },
            [disabled, onClick]
        );
        // Methods & Handler - END

        // ClassNames & Styles - START
        const getClasses = useCallback(() => {
            const classes = {
                "magnet-card": true,
                "elevation-1": variant === "elevated",
                "magnet-card--elevated": variant === "elevated",
                "magnet-card--filled": variant === "filled",
                "magnet-card--outlined": variant === "outlined",
                "magnet-card--disabled": disabled,
                "theme-light":
                    theme === "light" ||
                    (theme === "auto" && globalTheme === "light"),
                "theme-dark":
                    theme === "dark" ||
                    (theme === "auto" && globalTheme === "dark")
            };

            return clsx([classes, className]);
        }, [className, disabled, globalTheme, theme, variant]);

        const getStyles = useCallback((): React.CSSProperties => {
            const styleList: React.CSSProperties = {};

            return { ...styleList, ...style };
        }, [style]);
        // ClassNames & Styles - END

        // Life Cycle Hooks - START
        // Life Cycle Hooks - END

        // Render - START
        return React.createElement(
            tag,
            {
                id: id,
                className: getClasses(),
                style: getStyles(),
                onClick: handleClick,
                href: !disabled ? href : undefined,
                ref
            },
            children
        );
    }
);

Card.displayName = "Card";

const MagnetCard = React.memo(Card);

MagnetCard.displayName = "MagnetCard";

export { MagnetCard };
