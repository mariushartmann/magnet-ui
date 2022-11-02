import React from "react";
import { IListProps } from "./list.types";
export declare const List: {
    ({ children, className, showDividers, id, style, theme }: React.PropsWithChildren<IListProps>): JSX.Element;
    displayName: string;
};
declare const MagnetList: React.MemoExoticComponent<{
    ({ children, className, showDividers, id, style, theme }: React.PropsWithChildren<IListProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetList };
