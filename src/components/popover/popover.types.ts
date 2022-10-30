import { IComponentProps, IThemable } from "../../types";

export interface IPopoverProps extends IComponentProps, IThemable {
    /**
     * The alignment of the menu
     *
     * @docType string
     * @defaultValue `"left"`
     */
    align?: MenuAlignment;

    /**
     * The element that the menu attach to
     *
     * @docType React.RefObject
     */
    anchorEl: React.RefObject<HTMLElement>;

    /**
     * An event that is emitted when the user clicked outside of the menu
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onOutsideClick?: () => void;

    /**
     * The width of the menu
     *
     * @docType string
     * @defaultValue `"auto"`
     */
    width?: MenuWidth;

    /**
     * Controls whether the component is visible or hidden
     *
     * @docType boolean
     * @defaultValue `false`
     */
    value?: boolean;
}

export type MenuAlignment = "left" | "right";
export type MenuWidth = "auto" | "match-parent";
