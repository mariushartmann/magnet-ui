import React from "react";
import { ICardProps } from "./card.types";
export declare const Card: React.ForwardRefExoticComponent<ICardProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>>;
declare const MagnetCard: React.MemoExoticComponent<React.ForwardRefExoticComponent<ICardProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>>>;
export { MagnetCard };
