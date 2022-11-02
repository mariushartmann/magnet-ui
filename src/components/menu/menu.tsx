// System imports
import React, { PropsWithChildren, useCallback } from "react";
import clsx from "clsx";

// Internal imports
import { MagnetList, MagnetListItem } from "../list";
import { MagnetPopover } from "../popover";

// Component imports
import { IMenuProps } from "./menu.types";

export const Menu = ({
    anchorEl,
    align = "left",
    className = undefined,
    id = undefined,
    onOutsideClick = undefined,
    options,
    style = undefined,
    theme = "auto",
    width = "auto",
    value = false
}: IMenuProps): JSX.Element => {
    // Vars & States - START
    // Vars & States - END

    // Methods & Handler - START
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-menu": true
        };

        return clsx([classes, className]);
    }, [className]);

    const getStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...style };
    }, [style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    // Life Cycle Hooks - END

    // Render - START
    return (
        <MagnetPopover
            id={id}
            className={getClasses()}
            style={getStyles()}
            anchorEl={anchorEl}
            align={align}
            onOutsideClick={onOutsideClick}
            theme={theme}
            value={value}
            width={width}
        >
            <MagnetList theme={theme}>
                {options.map((o, i) => {
                    return (
                        <MagnetListItem
                            key={o.title + i}
                            appendIcon={o.appendIcon}
                            disabled={o.disabled}
                            onClick={o.onClick}
                            prependIcon={o.prependIcon}
                        >
                            {o.title}
                        </MagnetListItem>
                    );
                })}
            </MagnetList>
        </MagnetPopover>
    );
};

Menu.displayName = "Menu";

const MagnetMenu = React.memo(Menu);

MagnetMenu.displayName = "MagnetMenu";

export { MagnetMenu };
