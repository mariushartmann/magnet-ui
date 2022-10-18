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
}
