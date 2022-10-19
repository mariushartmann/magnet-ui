import { IComponentProps } from "../../types";
export interface IImageProps extends IComponentProps {
    /**
     * The aspect ratio of the image (ratio = width/hight)
     *
     * @docType number
     * @defaultValue `1`
     */
    aspectRatio?: number;
    /**
     * Prevents the image from being cropped if it doesn’t fit
     *
     * @docType boolean
     * @defaultValue `false`
     */
    contain?: boolean;
    /**
     * The image src
     *
     * @docType string
     */
    src: string;
}
