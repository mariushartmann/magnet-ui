import React from "react";
import { ICardActionsProps } from "./card.types";
export declare const CardActions: {
    ({ children, className, id, style }: React.PropsWithChildren<ICardActionsProps>): JSX.Element;
    displayName: string;
};
declare const MagnetCardActions: React.MemoExoticComponent<{
    ({ children, className, id, style }: React.PropsWithChildren<ICardActionsProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetCardActions };
