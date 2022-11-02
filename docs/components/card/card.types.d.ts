/// <reference types="react" />
import { IClickable, IComponentProps, ILinkable, IThemable } from "../../types";
export interface ICardProps extends IComponentProps, IThemable, ILinkable, IClickable<React.MouseEvent<HTMLElement>> {
    /**
     * The display style of the component
     *
     * @docType string
     * @defaultValue `"elevated"`
     */
    variant?: CardVariant;
}
export declare type CardVariant = "elevated" | "filled" | "outlined";
export interface ICardActionsProps extends IComponentProps {
}
export interface ICardBodyProps extends IComponentProps {
}
export interface ICardTitleProps extends IComponentProps {
}
