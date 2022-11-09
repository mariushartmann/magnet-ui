import React from "react";
import { INavBarLinkProps } from "./navBar.types";
export declare const NavBarLink: React.ForwardRefExoticComponent<INavBarLinkProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
declare const MagnetNavBarLink: React.MemoExoticComponent<React.ForwardRefExoticComponent<INavBarLinkProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>>;
export { MagnetNavBarLink };
