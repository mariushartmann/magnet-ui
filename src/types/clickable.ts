/**
 * The base interface for clickable components
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IClickable<T> {
    /**
     * Set the component to disabled
     *
     * @docType boolean
     * @defaultValue `false`
     */
    disabled?: boolean;

    /**
     * Event that is emitted when the component is clicked
     *
     * @docType callback
     * @defaultValue `undefined`
     */
    onClick?: (event: T) => void;
}
