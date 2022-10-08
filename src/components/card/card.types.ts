import { IClickable, IComponentProps, ILinkable, IThemable } from "../../types";

export interface ICardProps
    extends IComponentProps,
        IThemable,
        ILinkable,
        IClickable<React.MouseEvent<HTMLElement>> {
    /**
     * The display style of the component
     *
     * @docType string
     * @defaultValue `"default"`
     */
    variant?: CardVariant;
}

export type CardVariant = "elevated" | "filled" | "outlined";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICardActionsProps extends IComponentProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICardBodyProps extends IComponentProps {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICardTitleProps extends IComponentProps {}
