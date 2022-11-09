// system imports
import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";

// internal imports
import { isBrowser } from "../../utils/window";

// component imports
import { IAppProps } from "./app.types";
import { hexToRgb, hslToHex, rgbToHsl } from "../../utils/colors";

export const ThemeContext = React.createContext<"light" | "dark">("light");

const App = ({
    children = undefined,
    className = undefined,
    customTheme = undefined,
    hasNavBar = false,
    hasNavRail = false,
    id = "magnet-app",
    style = undefined,
    theme = "auto"
}: React.PropsWithChildren<IAppProps>) => {
    // Vars & States - START
    const [internalTheme, setInternalTheme] =
        useState<"light" | "dark">("light");
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const classes = useMemo(() => {
        const classes = {
            "magnet-app": true,
            "magnet-app--has-nav-bar": hasNavBar,
            "magnet-app--has-nav-rail": hasNavRail,
            "theme-light": internalTheme === "light",
            "theme-dark": internalTheme === "dark"
        };

        return clsx([classes, className]);
    }, [className, hasNavBar, hasNavRail, internalTheme]);

    const customThemeStyle = useMemo((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};
        const valuesToGenerate = [
            0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 99, 100
        ];

        if (customTheme) {
            Object.entries(customTheme).forEach(([key, value]) => {
                const rgb = hexToRgb(value);
                const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
                styleList[`--${key}-original`] = value;
                valuesToGenerate.forEach((gen) => {
                    styleList[`--${key}-${gen}`] = hslToHex(
                        hsl[0],
                        hsl[1],
                        gen
                    );
                });
            });
        }

        return styleList;
    }, [customTheme]);

    const styles = useMemo((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...customThemeStyle, ...style };
    }, [customThemeStyle, style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    useEffect(() => {
        if (theme === "auto") {
            let setAutoTheme = () => {
                return setInternalTheme("light");
            };

            if (isBrowser) {
                if (
                    window.matchMedia &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                ) {
                    setAutoTheme = () => {
                        return setInternalTheme("dark");
                    };
                }
            }

            setAutoTheme();
        } else {
            setInternalTheme(theme);
        }
    }, [theme]);
    // Life Cycle Hooks - END

    // Render - START
    return (
        <ThemeContext.Provider value={internalTheme}>
            <div id={id} className={classes} style={styles}>
                <div className="magnet-app--wrapper">{children}</div>
            </div>
        </ThemeContext.Provider>
    );
};

App.displayName = "App";

const MagnetApp = React.memo(App);

MagnetApp.displayName = "MagnetApp";

export { MagnetApp };
