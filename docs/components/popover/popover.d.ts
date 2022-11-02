import React, { PropsWithChildren } from "react";
import { IPopoverProps } from "./popover.types";
export declare const Popover: {
    ({ anchorEl, align, children, className, id, onOutsideClick, style, theme, width, value }: PropsWithChildren<IPopoverProps>): JSX.Element;
    displayName: string;
};
declare const MagnetPopover: React.MemoExoticComponent<{
    ({ anchorEl, align, children, className, id, onOutsideClick, style, theme, width, value }: PropsWithChildren<IPopoverProps>): JSX.Element;
    displayName: string;
}>;
export { MagnetPopover };
