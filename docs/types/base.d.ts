import React from "react";
/**
 * The base interface for props definitions to provide basic react attributes.
 */
export interface IComponentProps<T extends React.CSSProperties = React.CSSProperties> {
    /**
     * Additional classnames
     *
     * @docType string
     * @defaultValue `undefined`
     */
    className?: string;
    /**
     * The html id
     *
     * @docType string
     * @defaultValue `undefined`
     */
    id?: string;
    /**
     * Additional styles
     *
     * @docType React.CSSProperties
     * @defaultValue `undefined`
     */
    style?: T;
}
