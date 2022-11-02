import { IClickable } from "../../types";
import { IPopoverProps } from "../popover";

export interface IMenuProps extends IPopoverProps {
    /**
     * Controls whether the component is visible or hidden
     *
     * @docType array
     */
    options: IMenuOption[];
}

export interface IMenuOption extends IClickable<React.MouseEvent<HTMLElement>> {
    /**
     * The icon appended to the right of the list item content
     *
     * @docType string
     * @defaultValue `undefined`
     */
    appendIcon?: string;

    /**
     * The icon prepended to the left of the list item content
     *
     * @docType string
     * @defaultValue `undefined`
     */
    prependIcon?: string;

    /**
     * Option's subtitle
     *
     * @docType string
     * @defaultValue `undefined`
     */
    subtitle?: string;

    /**
     * Option's title
     *
     * @docType string
     */
    title: string;
}
