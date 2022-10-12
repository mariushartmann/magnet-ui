// system imports
import React, { useMemo, useContext } from "react";
import clsx from "clsx";

// internal imports
import { ThemeContext } from "../app";

// component imports
import { IHintProps } from "./hint.types";

const Hint = ({
    className = undefined,
    error = false,
    hints = [],
    id = undefined,
    style = undefined,
    theme = "auto"
}: IHintProps) => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const classes = useMemo(() => {
        const classes = {
            "magnet-hint": true,
            "magnet-hint--error": error,
            "theme-light":
                theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark":
                theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };

        return clsx([classes, className]);
    }, [className, theme, globalTheme, error]);

    const styles = useMemo((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...style };
    }, [style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    // Life Cycle Hooks - END

    // Render - START
    return (
        <div id={id} className={classes} style={styles}>
            {hints.map((hint, index) => {
                return <span key={hint + index}>{hint}</span>;
            })}
        </div>
    );
};

Hint.displayName = "Hint";

const MagnetHint = React.memo(Hint);

MagnetHint.displayName = "MagnetHint";

export { MagnetHint };
