import { IComponentProps, IThemable } from "../../types";
import { IButtonProps } from "../button";
export interface IDialogProps extends IComponentProps, IThemable {
    /**
     * Controls the actions of the dialog.
     *
     * @docType array
     * @defaultValue `[]`
     */
    actions?: IDialogAction[];
    /**
     * An event that is emitted when the dialog closed
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onClose?: () => void;
    /**
     * The title of the dialog.
     *
     * @docType string
     */
    title: string;
    /**
     * Controls whether the dialog is visible or hidden.
     *
     * @docType boolean
     * @defaultValue `false`
     */
    value?: boolean;
    /**
     * Defines the width of the dialog.
     *
     * @docType string | number
     * @defaultValue `"auto"`
     */
    width?: string | number;
}
export interface IDialogAction extends Omit<IButtonProps, "type"> {
    label: string;
}
