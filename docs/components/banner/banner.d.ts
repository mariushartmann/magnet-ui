import React from "react";
import { IBannerProps } from "./banner.types";
export declare const Banner: {
    ({ actions, children, className, hideIcon, icon, id, severity, style, theme, title, variant }: React.PropsWithChildren<IBannerProps>): JSX.Element;
    displayName: string;
};
declare const MagnetBanner: React.MemoExoticComponent<{
    ({ actions, children, className, hideIcon, icon, id, severity, style, theme, title, variant }: React.PropsWithChildren<IBannerProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetBanner };
