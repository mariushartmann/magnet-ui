import React from "react";
import { INavBarLinkProps } from "./navBar.types";
export declare const NavBarLink: {
    ({ active, children, className, disabled, icon, id, onClick, style }: React.PropsWithChildren<INavBarLinkProps>): JSX.Element;
    displayName: string;
};
declare const MagnetNavBarLink: React.MemoExoticComponent<{
    ({ active, children, className, disabled, icon, id, onClick, style }: React.PropsWithChildren<INavBarLinkProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetNavBarLink };
