// system imports
import React, { useCallback } from "react";
import clsx from "clsx";

// internal imports

// component imports
import { IRowProps } from "./grid.types";

export const Row = ({
    children = undefined,
    className = undefined,
    id = undefined,
    noGutters = false,
    style = undefined
}: React.PropsWithChildren<IRowProps>): JSX.Element => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-row": true,
            "magnet-row--no-gutters": noGutters
        };

        return clsx([classes, className]);
    }, [className, noGutters]);

    const getStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...style };
    }, [style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    // Life Cycle Hooks - END

    // Render - START
    return (
        <div id={id} className={getClasses()} style={getStyles()}>
            {children}
        </div>
    );
};

Row.displayName = "Row";

const MagnetRow = React.memo(Row);

MagnetRow.displayName = "MagnetRow";

export { MagnetRow };
