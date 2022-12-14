// system imports
import React, { useMemo } from "react";
import clsx from "clsx";

// internal imports

// component imports
import { IMainProps } from "./app.types";

const Main = ({
    children = undefined,
    className = undefined,
    id = undefined,
    style = undefined
}: React.PropsWithChildren<IMainProps>) => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const classes = useMemo(() => {
        const classes = {
            "magnet-main": true
        };

        return clsx([classes, className]);
    }, [className]);

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

Main.displayName = "Main";

const MagnetMain = React.memo(Main);

MagnetMain.displayName = "MagnetMain";

export { MagnetMain };
