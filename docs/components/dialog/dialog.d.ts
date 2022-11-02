import React from "react";
import { IDialogProps } from "./dialog.types";
export declare const Dialog: {
    ({ actions, children, className, onClose, id, style, theme, title, value, width }: React.PropsWithChildren<IDialogProps>): JSX.Element;
    displayName: string;
};
declare const MagnetDialog: React.MemoExoticComponent<{
    ({ actions, children, className, onClose, id, style, theme, title, value, width }: React.PropsWithChildren<IDialogProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetDialog };
