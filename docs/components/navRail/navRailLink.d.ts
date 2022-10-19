import React from "react";
import { INavRailLinkProps } from "./navRail.types";
export declare const NavRailLink: {
    ({ active, children, className, disabled, icon, id, onClick, style }: React.PropsWithChildren<INavRailLinkProps>): JSX.Element;
    displayName: string;
};
declare const MagnetNavRailLink: React.MemoExoticComponent<{
    ({ active, children, className, disabled, icon, id, onClick, style }: React.PropsWithChildren<INavRailLinkProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetNavRailLink };
