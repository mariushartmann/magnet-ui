import React from "react";
import { IButtonProps } from "./button.types";
export declare const Button: React.ForwardRefExoticComponent<IButtonProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
declare const MagnetButton: React.MemoExoticComponent<React.ForwardRefExoticComponent<IButtonProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>>;
export { MagnetButton };
