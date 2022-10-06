// system imports
import React, { useCallback } from "react";
import clsx from "clsx";

// internal imports
import { MagnetIcon } from "../icon";

// component imports
import { IProgressSpinnerProps } from "./progress-spinner.types";

const ProgressSpinner = ({
    className = undefined,
    id = undefined,
    size = 20,
    style = undefined
}: IProgressSpinnerProps) => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-progress-spinner": true
        };

        return clsx([classes, className]);
    }, [className]);

    const getStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {
            fontSize: size
        };

        return { ...styleList, ...style };
    }, [size, style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    // Life Cycle Hooks - END

    // Render - START
    return (
        <MagnetIcon id={id} className={getClasses()} style={getStyles()} spin>
            autorenew
        </MagnetIcon>
    );
};

ProgressSpinner.displayName = "ProgressSpinner";

const MagnetProgressSpinner = React.memo(ProgressSpinner);

MagnetProgressSpinner.displayName = "MagnetProgressSpinner";

export { MagnetProgressSpinner };
