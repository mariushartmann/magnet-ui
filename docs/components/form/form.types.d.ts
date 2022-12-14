import { IComponentProps } from "../../types";
export interface IFormProps extends IComponentProps {
    /**
     * Markes the whole form as dirty. This activated the validation on all fields inside.
     *
     * @docType boolean
     * @defaultValue `false`
     */
    isDirty?: boolean;
    /**
     * The validation mode of the form.
     * `Lazy` will only validate after a user took action.
     * `Force` will validate immediatly.
     *
     * @docType string
     * @values lazy | force
     * @defaultValue `"lazy"`
     */
    mode?: "lazy" | "force";
    /**
     * This event is fired if a submit button was clicked inside the form
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onSubmit: (data: {
        [k: string]: any;
    }) => void;
    /**
     * This event is fired if the validity of the form changed
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onValidityChange?: (validity: boolean) => void;
}
export interface IFormData {
    [key: string]: IFormDataEntry;
}
export interface IFormDataEntry {
    value: any;
    isValid: boolean;
}
export interface IFormContext {
    isDirty: boolean;
    mode: "lazy" | "force";
    handlePublish: (data: IHandlePublishBody) => void;
}
export interface IHandlePublishBody extends IFormDataEntry {
    name: string;
}
