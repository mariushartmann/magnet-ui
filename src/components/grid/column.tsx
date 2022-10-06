// system imports
import React, { useCallback } from "react";
import clsx from "clsx";

// internal imports

// component imports
import { IColumnProps } from "./grid.types";

export const Column = ({
    children = undefined,
    className = undefined,
    id = undefined,
    lg = undefined,
    md = undefined,
    sm = undefined,
    style = undefined,
    xl = undefined,
    xs = undefined
}: React.PropsWithChildren<IColumnProps>): JSX.Element => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/member-delimiter-style
        const classes: { [key: string]: boolean } = {
            "magnet-column": true
        };

        if (xs) {
            classes[`magnet-column--xs-${xs}`] = true;
        }
        if (sm) {
            classes[`magnet-column--sm-${sm}`] = true;
        }
        if (md) {
            classes[`magnet-column--md-${md}`] = true;
        }
        if (lg) {
            classes[`magnet-column--lg-${lg}`] = true;
        }
        if (xl) {
            classes[`magnet-column--xl-${xl}`] = true;
        }

        return clsx([classes, className]);
    }, [className, lg, md, sm, xl, xs]);

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

Column.displayName = "Column";

const MagnetColumn = React.memo(Column);

MagnetColumn.displayName = "MagnetColumn";

export { MagnetColumn };
