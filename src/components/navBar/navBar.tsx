// system imports
import React, { useCallback, useContext } from "react";
import clsx from "clsx";

// internal imports
import { ThemeContext } from "../app";

// component imports
import { INavBarProps } from "./navBar.types";

export const NavBar = ({
    children = undefined,
    className = undefined,
    id = undefined,
    style = undefined,
    theme = "auto",
    variant = "flat"
}: React.PropsWithChildren<INavBarProps>) => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-nav-bar": true,
            "magnet-nav-bar--flat": variant === "flat",
            "magnet-nav-bar--elevated": variant === "elevated",
            "elevation-2": variant === "elevated",
            "theme-light":
                theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark":
                theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };

        return clsx([classes, className]);
    }, [className, globalTheme, theme, variant]);

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
        <div id={id} className={getClasses()} style={getStyles()}>
            {children}
        </div>
    );
};

NavBar.displayName = "NavBar";

const MagnetNavBar = React.memo(NavBar);

MagnetNavBar.displayName = "MagnetNavBar";

export { MagnetNavBar };
