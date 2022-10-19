import React from "react";
import { INavBarProps } from "./navBar.types";
export declare const NavBar: {
    ({ children, className, id, style, theme, variant }: React.PropsWithChildren<INavBarProps>): JSX.Element;
    displayName: string;
};
declare const MagnetNavBar: React.MemoExoticComponent<{
    ({ children, className, id, style, theme, variant }: React.PropsWithChildren<INavBarProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetNavBar };
