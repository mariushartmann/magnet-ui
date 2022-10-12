// system imports
import React, { useMemo } from "react";
import clsx from "clsx";

// internal imports

// component imports
import { IContainerProps } from "./grid.types";

export const Container = ({
    children = undefined,
    className = undefined,
    id = undefined,
    fluid = false,
    style = undefined
}: React.PropsWithChildren<IContainerProps>): JSX.Element => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const classes = useMemo(() => {
        const classes = {
            "magnet-container": true,
            "magnet-container--fluid": fluid
        };

        return clsx([classes, className]);
    }, [className, fluid]);

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

Container.displayName = "Container";

const MagnetContainer = React.memo(Container);

MagnetContainer.displayName = "MagnetContainer";

export { MagnetContainer };
