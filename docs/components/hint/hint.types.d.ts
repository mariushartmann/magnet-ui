import { IComponentProps, IThemable } from "../../types";
export interface IHintProps extends IComponentProps, IThemable {
    /**
     * Puts the hint in an error state
     *
     * @docType boolean
     * @defaultValue `false`
     */
    error?: boolean;
    /**
     * The hints
     *
     * @docType array
     * @defaultValue `[]`
     */
    hints: string[];
}
