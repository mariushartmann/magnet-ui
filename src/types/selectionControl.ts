import { IClickable, IComponentProps } from ".";

export interface ISelectionControlProps<
    THtmlElement extends HTMLElement = HTMLElement,
    THtmlInnerElement extends HTMLElement = HTMLElement
> extends IComponentProps,
        IClickable<React.MouseEvent<THtmlInnerElement>> {
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
     * The label
     *
     * @docType string
     * @defaultValue `undefined`
     */
    label?: string;

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
     * The html form name
     *
     * @docType string
     * @defaultValue `undefined`
     */
    name?: string;

    /**
     * An event that is emitted when the value changed
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onChange?: (value: boolean) => void;

    /**
     * Puts input in readonly state
     *
     * @docType boolean
     * @defaultValue `false`
     */
    readOnly?: boolean;

    /**
     * A reference to the HTML input
     *
     * @docType React.Ref
     * @defaultValue `undefined`
     */
    ref?: React.Ref<THtmlElement>;

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
     * A value of the input
     *
     * @docType any
     * @defaultValue `undefined`
     */
    value?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InputValidationRule = (value: boolean) => string | boolean;
export type InputValidationRules = (InputValidationRule | string)[];
