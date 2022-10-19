import React from "react";
import { IContainerProps } from "./grid.types";
export declare const Container: {
    ({ children, className, id, fluid, style }: React.PropsWithChildren<IContainerProps>): JSX.Element;
    displayName: string;
};
declare const MagnetContainer: React.MemoExoticComponent<{
    ({ children, className, id, fluid, style }: React.PropsWithChildren<IContainerProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetContainer };
