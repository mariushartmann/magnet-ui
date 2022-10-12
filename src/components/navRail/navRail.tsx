// system imports
import React, { useContext, useMemo } from "react";
import clsx from "clsx";

// internal imports
import { ThemeContext } from "../app";

// component imports
import { INavRailProps } from "./navRail.types";

export const NavRail = ({
    children = undefined,
    className = undefined,
    id = undefined,
    style = undefined,
    theme = "auto",
    variant = "flat"
}: React.PropsWithChildren<INavRailProps>) => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const classes = useMemo(() => {
        const classes = {
            "magnet-nav-rail": true,
            "magnet-nav-rail--flat": variant === "flat",
            "magnet-nav-rail--elevated": variant === "elevated",
            "elevation-2": variant === "elevated",
            "theme-light":
                theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark":
                theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };

        return clsx([classes, className]);
    }, [className, globalTheme, theme, variant]);

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
        <div id={id} className={classes} style={styles}>
            {children}
        </div>
    );
};

NavRail.displayName = "NavRail";

const MagnetNavRail = React.memo(NavRail);

MagnetNavRail.displayName = "MagnetNavRail";

export { MagnetNavRail };
