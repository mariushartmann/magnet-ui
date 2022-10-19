import { IThemable, ISelectionControlProps } from "../../types";
export interface IRadioProps extends Omit<ISelectionControlProps<HTMLInputElement, HTMLDivElement>, "rules" | "mode" | "value">, IThemable {
    /**
     * The checked state of the radio.
     *
     * @docType boolean
     * @defaultValue `false`
     */
    checked?: boolean;
    /**
     * The value of the radio.
     *
     * @docType string
     */
    value: string;
}
