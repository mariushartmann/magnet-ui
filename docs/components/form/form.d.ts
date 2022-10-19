import React from "react";
import { IFormProps, IFormContext } from "./form.types";
export declare const FormContext: React.Context<IFormContext>;
declare const MagnetForm: React.MemoExoticComponent<{
    ({ children, className, id, isDirty, mode, onSubmit, onValidityChange, style }: React.PropsWithChildren<IFormProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetForm };
