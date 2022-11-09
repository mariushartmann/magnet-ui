import React from "react";
import { IAppProps } from "./app.types";
export declare const ThemeContext: React.Context<"light" | "dark">;
declare const MagnetApp: React.MemoExoticComponent<{
    ({ children, className, customTheme, hasNavBar, hasNavRail, id, style, theme }: React.PropsWithChildren<IAppProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetApp };
