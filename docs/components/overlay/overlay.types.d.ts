/// <reference types="react" />
import { IClickable, IComponentProps } from "../../types";
export interface IOverlayProps extends IComponentProps, Omit<IClickable<React.MouseEvent<HTMLElement>>, "disabled"> {
    /**
     * Applies position: absolute to the component
     *
     * @docType boolean
     * @defaultValue `false`
     */
    absolute?: boolean;
    /**
     * Applies specified color to the control. The default value depends on the application color mode.
     *
     * @docType string
     * @defaultValue `undefined`
     */
    color?: string;
    /**
     * Sets the overlay opacity
     *
     * @docType number
     * @defaultValue `0.5`
     */
    opacity?: number;
    /**
     * Controls whether the component is visible or hidden
     *
     * @docType boolean
     * @defaultValue `false`
     */
    value?: boolean;
    /**
     * The z-index used for the component
     *
     * @docType number
     * @defaultValue `5`
     */
    zIndex?: number;
}
