// system imports
import React from "react";
import clsx from "clsx";

// internal imports

// component imports
import { IBannerTitleProps } from "./banner.types";

export const BannerTitle = ({
    children = undefined,
    className = undefined,
    id = undefined,
    style = undefined
}: React.PropsWithChildren<IBannerTitleProps>): JSX.Element => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = () => {
        const classes = {
            "magnet-banner-title": true
        };

        return clsx([classes, className]);
    };

    const getStyles = (): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...style };
    };
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

BannerTitle.displayName = "BannerTitle";

const MagnetBannerTitle = React.memo(BannerTitle);

MagnetBannerTitle.displayName = "MagnetBannerTitle";

export { MagnetBannerTitle };
