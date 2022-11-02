// system imports
import React, { useCallback } from "react";
import clsx from "clsx";

// internal imports

// component imports
import { ISpacerProps } from "./spacer.types";

export const Spacer = ({
    className = undefined,
    id = undefined,
    style = undefined
}: ISpacerProps): JSX.Element => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-spacer": true
        };

        return clsx([classes, className]);
    }, [className]);

    const getStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...style };
    }, [style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    // Life Cycle Hooks - END

    // Render - START
    return <div id={id} className={getClasses()} style={getStyles()}></div>;
};

Spacer.displayName = "Spacer";

const MagnetSpacer = React.memo(Spacer);

MagnetSpacer.displayName = "MagnetSpacer";

export { MagnetSpacer };
