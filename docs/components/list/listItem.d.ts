import React from "react";
import { IListItemProps } from "./list.types";
export declare const ListItem: React.ForwardRefExoticComponent<IListItemProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement | HTMLElement>>;
declare const MagnetListItem: React.MemoExoticComponent<React.ForwardRefExoticComponent<IListItemProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement | HTMLElement>>>;
export { MagnetListItem };
