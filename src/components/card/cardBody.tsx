// system imports
import React, { useMemo } from "react";
import clsx from "clsx";

// internal imports

// component imports
import { ICardBodyProps } from "./card.types";

export const CardBody = ({
    children = undefined,
    className = undefined,
    id = undefined,
    style = undefined
}: React.PropsWithChildren<ICardBodyProps>): JSX.Element => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const classes = useMemo(() => {
        const classes = {
            "magnet-card-body": true
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

CardBody.displayName = "CardBody";

const MagnetCardBody = React.memo(CardBody);

MagnetCardBody.displayName = "MagnetCardBody";

export { MagnetCardBody };
