/// <reference types="react" />
import { IClickable, IComponentProps, IThemable } from "../../types";
export interface INavBarProps extends IComponentProps, IThemable {
    /**
     * The display style of the component
     *
     * @docType string
     * @defaultValue `"default"`
     */
    variant?: NavBarVariant;
}
export declare type NavBarVariant = "flat" | "elevated";
export interface INavBarLinkProps extends IComponentProps, IClickable<React.MouseEvent<HTMLElement>> {
    /**
     * Indicated the link as active
     *
     * @docType boolean
     * @defaultValue `false`
     */
    active?: boolean;
    /**
     * The Material symbol name
     *
     * @docType string
     * @defaultValue `undefined`
     */
    icon: string;
}
