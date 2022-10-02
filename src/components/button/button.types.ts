import { IClickable, IComponentProps, ILinkable, IThemable } from "../../types";

export interface IButtonProps
  extends IComponentProps,
    IThemable,
    ILinkable,
    IClickable<React.MouseEvent<HTMLElement>> {
  /**
   * The icon appended to the right of the btn content
   *
   * @docType string
   * @defaultValue `undefined`
   */
  appendIcon?: string;

  /**
   * Make the btn takes the whole width
   *
   * @docType boolean
   * @defaultValue `false`
   */
  block?: boolean;

  /**
   * The btn color
   *
   * @docType string
   * @defaultValue `default`
   */
  color?: BtnColor;

  /**
   * Change the button style to fixed width/height
   *
   * @docType boolean
   * @defaultValue `false`
   */
  icon?: boolean;

  /**
   * Adds a loading spinner and disable the click event
   *
   * @docType boolean
   * @defaultValue `undefined`
   */
  loading?: boolean;

  /**
   * The icon prepended to the left of the btn content
   *
   * @docType string
   * @defaultValue `undefined`
   */
  prependIcon?: string;

  /**
   * Make the btn smaller
   *
   * @docType boolean
   * @defaultValue `undefined`
   */
  small?: boolean;

  /**
   * Button type
   *
   * @docType string
   * @values button | submit
   * @defaultValue `undefined`
   */
  type?: "button" | "submit";

  /**
   * The display style of the component
   *
   * @docType string
   * @defaultValue `"default"`
   */
  variant?: BtnVariant;
}

export type BtnColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";

export type BtnVariant = "filled" | "elevated" | "outlined" | "text";
