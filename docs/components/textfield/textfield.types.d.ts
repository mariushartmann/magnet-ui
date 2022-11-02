import { IThemable, IInputProps } from "../../types";
export interface ITextfieldProps extends IInputProps<string, HTMLInputElement, HTMLDivElement>, IThemable {
    /**
     * The icon name of appending icon
     *
     * @docType string
     * @defaultValue `undefined`
     */
    appendIcon?: string;
    /**
     * Add input clear functionality
     *
     * @docType boolean
     * @defaultValue `false`
     */
    clearable?: boolean;
    /**
     * The label of the textfield
     *
     * @docType string
     * @defaultValue `"fal"`
     */
    label: string;
    /**
     * An event that is emitted when the append icon was clicked
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onAppendIconClick?: () => void;
    /**
     * An event that is emitted when clear icon was clicked
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onClear?: () => void;
    /**
     * An event that is emitted when the prepend icon waas clicked
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onPrependIconClick?: () => void;
    /**
     * Sets the input’s placeholder text
     *
     * @docType string
     * @defaultValue `undefined`
     */
    placeholder?: string;
    /**
     * The icon name of prepending icon
     *
     * @docType string
     * @defaultValue `undefined`
     */
    prependIcon?: string;
    /**
     * Sets input type
     *
     * @docType string
     * @defaultValue `"text"`
     */
    type?: TextfieldType;
}
export declare type TextfieldType = "password" | "text";
