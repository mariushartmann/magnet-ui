import { IComponentProps, IThemable } from "../../types";
import { IButtonProps } from "../button";

export interface IBannerProps extends IComponentProps, IThemable {
    /**
     * Controls the actions of the banner.
     *
     * @docType array
     * @defaultValue `[]`
     */
    actions?: IBannerAction[];

    /**
     * Hides the icon to reduce the prominence of the banner
     *
     * @docType boolean
     * @defaultValue `false`
     */
    hideIcon?: boolean;

    /**
     * The Material symbol name
     *
     * @docType string
     * @defaultValue `undefined`
     */
    icon?: string;

    /**
     * The severity of the banner
     *
     * @docType string
     * @values info | success | warning | error
     * @defaultValue `undefined`
     */
    severity?: BannerSeverity;

    /**
     * The title of the banner
     *
     * @docType string
     * @defaultValue `undefined`
     */
    title?: string;

    /**
     * The Variant of the banner
     *
     * @docType string
     * @values default | elevated
     * @defaultValue `"default"`
     */
    variant?: BannerVariant;
}

export interface IBannerAction extends Omit<IButtonProps, "type"> {
    label: string;
}

export type BannerSeverity = "info" | "success" | "warning" | "error";

export type BannerVariant = "elevated" | "filled";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBannerTitleProps extends IComponentProps {}
