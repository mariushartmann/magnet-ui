import { IComponentProps, InputValidationRules, IThemable } from "../../types";

export interface IRadioGroupProps extends IComponentProps, IThemable {
    /**
     * Puts the input in an error state
     *
     * @docType boolean
     * @defaultValue `false`
     */
    error?: boolean;

    /**
     * Adds a hint below the input (changes color if the input has an error state)
     *
     * @docType string
     * @defaultValue `undefined`
     */
    hint?: string;

    /**
     * The validation mode of the input.
     * `Lazy` will only validate after a user took action.
     * `Force` will validate immediatly.
     *
     * @docType string
     * @values lazy | force
     * @defaultValue `"lazy"`
     */
    mode?: "lazy" | "force";

    /**
     * The name of the radio group
     *
     * @docType string
     */
    name: string;

    /**
     * An event that is emitted when the value changed
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onChange?: (newValue: string) => void;

    /**
     * Displays radio buttons in row
     *
     * @docType boolean
     * @defaultValue `false`
     */
    row?: boolean;

    /**
     * Accepts a mixed array of types function, boolean and string.
     * Functions pass an input value as an argument and must return either true / false or a string containing an error message.
     * The input field will enter an error state if a function returns (or any value in the array contains) false or is a string
     *
     * @docType array
     * @defaultValue `[]`
     */
    rules?: InputValidationRules;

    /**
     * The value of the selected radio in the group
     *
     * @docType string
     * @defaultValue `undefined`
     */
    value?: string;
}
