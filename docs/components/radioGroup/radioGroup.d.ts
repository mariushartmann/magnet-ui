import React from "react";
import { IRadioGroupProps } from "./radioGroup.types";
export declare const RadioGroup: {
    ({ children, className, disabled, error, hint, id, mode, name, onChange, row, rules, style, theme, value }: React.PropsWithChildren<IRadioGroupProps>): JSX.Element;
    displayName: string;
};
declare const MagnetRadioGroup: React.MemoExoticComponent<{
    ({ children, className, disabled, error, hint, id, mode, name, onChange, row, rules, style, theme, value }: React.PropsWithChildren<IRadioGroupProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetRadioGroup };
