import React from "react";
import { IColumnProps } from "./grid.types";
export declare const Column: {
    ({ children, className, id, lg, md, sm, style, xl, xs }: React.PropsWithChildren<IColumnProps>): JSX.Element;
    displayName: string;
};
declare const MagnetColumn: React.MemoExoticComponent<{
    ({ children, className, id, lg, md, sm, style, xl, xs }: React.PropsWithChildren<IColumnProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetColumn };
