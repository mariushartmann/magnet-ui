import { IClickable, IComponentProps, ILinkable, IThemable } from "../../types";

export interface IListProps extends IComponentProps, IThemable {
    /**
     * Show the dividers between list items
     *
     * @docType boolean
     * @defaultValue `false`
     */
    showDividers?: boolean;
}

export interface IListItemProps
    extends IComponentProps,
        IThemable,
        IClickable<React.MouseEvent<HTMLElement>>,
        ILinkable {
    /**
     * Indicated the link as active
     *
     * @docType boolean
     * @defaultValue `false`
     */
    active?: boolean;

    /**
     * The icon appended to the right of the list item content
     *
     * @docType string
     * @defaultValue `undefined`
     */
    appendIcon?: string;

    /**
     * The list item color
     *
     * @docType string
     * @defaultValue `default`
     */
    color?: ListItemColor;

    /**
     * The icon prepended to the left of the list item content
     *
     * @docType string
     * @defaultValue `undefined`
     */
    prependIcon?: string;

    /**
     * The anchor link target prop. It's applied if the href prop is set.
     *
     * @docType string
     * @defaultValue `undefined`
     */
    target?: React.HTMLAttributeAnchorTarget;
}

export type ListItemColor =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error";
