// system imports
import React, { useCallback } from "react";
import clsx from "clsx";

// internal imports

// component imports
import { IImageProps } from "./image.types";

export const Image = ({
    aspectRatio = 1,
    className = undefined,
    contain = false,
    id = undefined,
    src,
    style = undefined
}: IImageProps): JSX.Element => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-image": true,
            "magnet-image--contain": contain
        };

        return clsx([classes, className]);
    }, [className, contain]);

    const getStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};
        let tmpStyle = style;

        if (aspectRatio) {
            tmpStyle = {
                ...style,
                ...{
                    paddingTop: 100 / aspectRatio + "%"
                }
            };
        }

        return { ...styleList, ...tmpStyle };
    }, [aspectRatio, style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    // Life Cycle Hooks - END

    // Render - START
    return (
        <div id={id} className={getClasses()} style={getStyles()}>
            <div
                className="magnet-image--inner"
                style={{
                    backgroundImage: `url(${src})`
                }}
            ></div>
        </div>
    );
};

Image.displayName = "Image";

const MagnetImage = React.memo(Image);

MagnetImage.displayName = "MagnetImage";

export { MagnetImage };
