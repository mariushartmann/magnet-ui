import { IClickable, IComponentProps } from "../../types";

export interface IIconProps
    extends IComponentProps,
        IClickable<React.MouseEvent<HTMLElement>> {
    /**
     * The size of the icon
     *
     * @docType number
     * @defaultValue `20`
     */
    size?: number;

    /**
     * Makes an icon spin 360° clockwise
     *
     * @docType boolean
     * @defaultValue `false`
     */
    spin?: boolean;
}
