import { IComponentProps, IThemable } from "../../types";
export interface IAppProps extends IComponentProps, IThemable {
    /**
     * Custom theme options
     *
     * @docType object
     * @defaultValue `undefined`
     */
    customTheme?: IAppCustomTheme;
    /**
     * Designates some space for the NavBar
     *
     * @docType boolean
     * @defaultValue `false`
     */
    hasNavBar?: boolean;
    /**
     * Designates some space for the NavRail
     *
     * @docType boolean
     * @defaultValue `false`
     */
    hasNavRail?: boolean;
}
export interface IAppCustomTheme {
    /**
     * The primary color.
     * Expects a hex color code.
     *
     * @docType string
     * @defaultValue `undefined`
     */
    primary?: string;
    /**
     * The secondary color.
     * Expects a hex color code.
     *
     * @docType string
     * @defaultValue `undefined`
     */
    secondary?: string;
    /**
     * The success color.
     * Expects a hex color code.
     *
     * @docType string
     * @defaultValue `undefined`
     */
    success?: string;
    /**
     * The warning color.
     * Expects a hex color code.
     *
     * @docType string
     * @defaultValue `undefined`
     */
    warning?: string;
    /**
     * The error color.
     * Expects a hex color code.
     *
     * @docType string
     * @defaultValue `undefined`
     */
    error?: string;
    /**
     * The neutral color.
     * Expects a hex color code.
     *
     * @docType string
     * @defaultValue `undefined`
     */
    neutral?: string;
}
export interface IMainProps extends IComponentProps {
}
