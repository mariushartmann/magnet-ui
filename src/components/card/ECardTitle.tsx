// system imports
import React, { useCallback } from "react";
import clsx from "clsx";

// internal imports

// component imports
import { ICardTitleProps } from "./ECard.types";

export const CardTitle = ({
    children = undefined,
    className = undefined,
    id = undefined,
    style = undefined
}: React.PropsWithChildren<ICardTitleProps>): JSX.Element => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = () => {
        const classes = {
            "magnet-card-title": true
        };

        return clsx([classes, className]);
    };

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

CardTitle.displayName = "CardTitle";

const MagnetCardTitle = React.memo(CardTitle);

MagnetCardTitle.displayName = "MagnetCardTitle";

export { MagnetCardTitle };
