import React from "react";
import { INavRailLinkProps } from "./navRail.types";
export declare const NavRailLink: React.ForwardRefExoticComponent<INavRailLinkProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
declare const MagnetNavRailLink: React.MemoExoticComponent<React.ForwardRefExoticComponent<INavRailLinkProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>>;
export { MagnetNavRailLink };
