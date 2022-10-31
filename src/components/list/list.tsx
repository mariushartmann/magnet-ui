// system imports
import React, { useContext, useMemo } from "react";
import clsx from "clsx";

// internal imports
import { ThemeContext } from "../app";

// component imports
import { IListProps } from "./list.types";

export const List = ({
    children = undefined,
    className = undefined,
    showDividers = false,
    id = undefined,
    style = undefined,
    theme = "auto"
}: React.PropsWithChildren<IListProps>): JSX.Element => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const classes = useMemo(() => {
        const classes = {
            "magnet-list": true,
            "magnet-list--dividers": showDividers,
            "theme-light":
                theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark":
                theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };

        return clsx([classes, className]);
    }, [className, globalTheme, showDividers, theme]);

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
            {children}
        </div>
    );
};

List.displayName = "List";

const MagnetList = React.memo(List);

MagnetList.displayName = "MagnetList";

export { MagnetList };
