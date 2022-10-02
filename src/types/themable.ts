/**
 * The base interface for theamable components
 */
export interface IThemable {
    /**
     * The color theme of the component.
     *
     * @docType string
     * @values auto | light | dark
     * @defaultValue `"auto"`
     */
    theme?: Theme;
}

/**
 * Possible values for theme.
 */
export type Theme = "auto" | "light" | "dark";
