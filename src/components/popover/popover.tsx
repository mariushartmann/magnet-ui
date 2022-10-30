// System imports
import React, {
    PropsWithChildren,
    useEffect,
    useRef,
    useCallback,
    useState
} from "react";
import clsx from "clsx";
import { Portal } from "react-portal";
import { usePopper } from "react-popper";

// Internal imports
import { MagnetCard } from "../card";
import { useRect } from "../../hooks/useRect";
import { useOutsideClick } from "../../hooks/useOutsideClick";

// Component imports
import { IPopoverProps } from "./popover.types";

type Placement = "bottom-start" | "bottom-end";

export const Popover = ({
    anchorEl,
    align = "left",
    children,
    className = undefined,
    id = undefined,
    onOutsideClick = undefined,
    style = undefined,
    theme = "auto",
    width = "auto",
    value = false
}: PropsWithChildren<IPopoverProps>): JSX.Element => {
    // Vars & States - START
    const popperRef = useRef(null);
    const [anchorRect, updateAnchor] = useRect(anchorEl);
    const [placement, setPlacement] = useState<Placement>("bottom-end");
    const { styles, attributes } = usePopper(
        anchorEl.current,
        popperRef.current,
        {
            placement
        }
    );
    // Vars & States - END

    // Methods & Handler - START
    const handleOutsideClick = useCallback(() => {
        if (value && onOutsideClick) {
            onOutsideClick();
        }
    }, [onOutsideClick, value]);
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-popover": true,
            "magnet-popover--show": value
        };

        return clsx([classes, className]);
    }, [className, value]);

    const getStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {
            width: width === "match-parent" ? anchorRect.width : undefined
        };

        return { ...styleList, ...styles.popper, ...style };
    }, [anchorRect.width, style, styles.popper, width]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    useOutsideClick(
        popperRef,
        value,
        () => {
            handleOutsideClick();
        },
        [anchorEl]
    );

    useEffect(() => {
        if (value) {
            updateAnchor();
        }
    }, [updateAnchor, value]);

    useEffect(() => {
        if (align === "left") {
            setPlacement("bottom-start");
        } else {
            setPlacement("bottom-end");
        }
    }, [align]);
    // Life Cycle Hooks - END

    // Render - START
    return (
        <Portal
            node={
                typeof document !== "undefined" &&
                document.getElementById("magnet-app")
            }
        >
            <div
                id={id}
                className={getClasses()}
                style={getStyles()}
                ref={popperRef}
                {...attributes.popper}
            >
                <MagnetCard variant="elevated" theme={theme}>
                    {children}
                </MagnetCard>
            </div>
        </Portal>
    );
};

Popover.displayName = "Popover";

const MagnetPopover = React.memo(Popover);

MagnetPopover.displayName = "MagnetPopover";

export { MagnetPopover };
