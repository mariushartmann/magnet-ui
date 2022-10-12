// system imports
import React, { useCallback, useContext, useMemo } from "react";
import clsx from "clsx";

// internal imports
import { ThemeContext } from "../app";
import { MagnetButton } from "../button";
import { MagnetIcon } from "../icon";

// component imports
import { IBannerProps } from "./banner.types";
import { MagnetBannerTitle } from "./bannerTitle";

export const Banner = ({
    actions = [],
    children = undefined,
    className = undefined,
    hideIcon = false,
    icon = undefined,
    id = undefined,
    severity = "info",
    style = undefined,
    theme = "auto",
    title = undefined,
    variant = "elevated"
}: React.PropsWithChildren<IBannerProps>): JSX.Element => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    const actionColor = useMemo(() => {
        if (severity === "info") {
            return "primary";
        }
        return severity;
    }, [severity]);
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const classes = useMemo(() => {
        const classes = {
            "magnet-banner": true,
            "elevation-1": variant === "elevated",
            "magnet-banner--elevated": variant === "elevated",
            "magnet-banner--filled": variant === "filled",
            "magnet-banner--info": severity === "info",
            "magnet-banner--success": severity === "success",
            "magnet-banner--warning": severity === "warning",
            "magnet-banner--error": severity === "error",
            "theme-light":
                theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark":
                theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };

        return clsx([classes, className]);
    }, [className, globalTheme, severity, theme, variant]);

    const styles = useMemo((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...style };
    }, [style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    // Life Cycle Hooks - END

    // Render - START
    const renderIcon = useCallback(() => {
        let finalIcon = icon;

        if (!finalIcon) {
            switch (severity) {
                case "info":
                    finalIcon = "info";
                    break;
                case "success":
                    finalIcon = "check_circle";
                    break;
                case "warning":
                    finalIcon = "warning";
                    break;
                case "error":
                    finalIcon = "error";
                    break;
            }
        }

        return (
            <MagnetIcon className="magnet-banner--icon mt-1" size={25}>
                {finalIcon}
            </MagnetIcon>
        );
    }, [icon, severity]);

    return (
        <div id={id} className={classes} style={styles}>
            <div className="magnet-banner--content">
                {!hideIcon && renderIcon()}
                <div className="magnet-banner--content-inner">
                    {title && <MagnetBannerTitle>{title}</MagnetBannerTitle>}
                    <span className="d-block-xs mt-1">{children}</span>
                </div>
            </div>
            {actions && actions.length > 0 && (
                <div className="magnet-banner--actions">
                    {actions.map((action, index) => {
                        return (
                            <MagnetButton
                                key={action.label + index}
                                {...action}
                                color={
                                    action.color ? action.color : actionColor
                                }
                            >
                                {action.label}
                            </MagnetButton>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

Banner.displayName = "Banner";

const MagnetBanner = React.memo(Banner);

MagnetBanner.displayName = "MagnetBanner";

export { MagnetBanner };
