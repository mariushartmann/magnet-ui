import React from "react";
import { IRowProps } from "./grid.types";
export declare const Row: {
    ({ children, className, id, noGutters, style }: React.PropsWithChildren<IRowProps>): JSX.Element;
    displayName: string;
};
declare const MagnetRow: React.MemoExoticComponent<{
    ({ children, className, id, noGutters, style }: React.PropsWithChildren<IRowProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetRow };
