// system imports
import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

// internal imports

// component imports
import { IAppProps } from "./app.types";

export const ThemeContext = React.createContext<"light" | "dark">("light");

const App = ({
  children = undefined,
  className = undefined,
  id = "magnet-app",
  style = undefined,
  theme = "auto"
}: React.PropsWithChildren<IAppProps>) => {
  // Vars & States - START
  const [internalTheme, setInternalTheme] = useState<"light" | "dark">("light");
  // Vars & States - END

  // Methods & Handler - START
  // Methods & Handler - END

  // ClassNames & Styles - START
  const getClasses = useCallback(() => {
    const classes = {
      "magnet-app": true,
      "theme-light": internalTheme === "light",
      "theme-dark": internalTheme === "dark"
    };

    return clsx([classes, className]);
  }, [className, internalTheme]);

  const getStyles = useCallback((): React.CSSProperties => {
    const styleList: React.CSSProperties = {};

    return { ...styleList, ...style };
  }, [style]);
  // ClassNames & Styles - END

  // Life Cycle Hooks - START
  useEffect(() => {
    if (theme === "auto") {
      let setAutoTheme = () => {
        return setInternalTheme("light");
      };

      if (typeof window !== "undefined") {
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
      <div id={id} className={getClasses()} style={getStyles()}>
        <div className="magnet-app--wrapper">{children}</div>
      </div>
    </ThemeContext.Provider>
  );
};

App.displayName = "App";

const MagnetApp = React.memo(App);

MagnetApp.displayName = "MagnetApp";

export { MagnetApp };
