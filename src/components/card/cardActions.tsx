// system imports
import React, { useCallback } from "react";
import clsx from "clsx";

// internal imports

// component imports
import { ICardActionsProps } from "./card.types";

export const CardActions = ({
    children = undefined,
    className = undefined,
    id = undefined,
    style = undefined
}: React.PropsWithChildren<ICardActionsProps>): JSX.Element => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-card-actions": true
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
    return (
        <div id={id} className={getClasses()} style={getStyles()}>
            {children}
        </div>
    );
};

CardActions.displayName = "CardActions";

const MagnetCardActions = React.memo(CardActions);

MagnetCardActions.displayName = "MagnetCardActions";

export { MagnetCardActions };
