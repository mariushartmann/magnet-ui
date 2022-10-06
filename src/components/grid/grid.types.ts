import { IComponentProps } from "../../types";

export interface IContainerProps extends IComponentProps {
    /**
     * Removes the max width and make the container full width
     *
     * @docType boolean
     * @defaultValue `false`
     */
    fluid?: boolean;
}

export interface IRowProps extends IComponentProps {
    /**
     * Controls whether the grid has spacing between the columns of not
     *
     * @docType boolean
     * @defaultValue `false`
     */
    noGutters?: boolean;
}

export interface IColumnProps extends IComponentProps {
    /**
     * The column size
     *
     * @docType number
     * @defaultValue `undefined`
     */
    xs?: number;

    /**
     * The column size for small screens and above
     *
     * @docType number
     * @defaultValue `undefined`
     */
    sm?: number;

    /**
     * The column size for medium screens and above
     *
     * @docType number
     * @defaultValue `undefined`
     */
    md?: number;

    /**
     * The column size for large screens and above
     *
     * @docType number
     * @defaultValue `undefined`
     */
    lg?: number;

    /**
     * The column size for very large screens
     *
     * @docType number
     * @defaultValue `undefined`
     */
    xl?: number;
}
