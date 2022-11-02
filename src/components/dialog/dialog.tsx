// system imports
import React, { useCallback, useEffect, useState } from "react";
import { Portal } from "react-portal";
import clsx from "clsx";

// internal imports
import { MagnetButton } from "../button";
import {
    MagnetCard,
    MagnetCardActions,
    MagnetCardBody,
    MagnetCardTitle
} from "../card";
import { MagnetIcon } from "../icon";
import { MagnetOverlay } from "../overlay";
import { MagnetSpacer } from "../spacer";

// component imports
import { IDialogProps } from "./dialog.types";

export const Dialog = ({
    actions = [],
    children,
    className,
    onClose = undefined,
    id = undefined,
    style,
    theme = "auto",
    title,
    value = false,
    width = "auto"
}: React.PropsWithChildren<IDialogProps>): JSX.Element => {
    // Vars & States - START
    const [internalValue, setInternalValue] = useState(value);
    // Vars & States - END

    // Methods & Handler - START
    const handleClose = useCallback(() => {
        if (onClose) {
            setInternalValue(false);
            onClose();
        }
    }, [onClose]);
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-dialog": true,
            "magnet-dialog--show": internalValue
        };

        return clsx([classes, className]);
    }, [className, internalValue]);

    const getStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...style };
    }, [style]);

    const getCardStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {
            zIndex: 201,
            width
        };

        return { ...styleList, ...style };
    }, [style, width]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    useEffect(() => {
        setInternalValue(value);
    }, [value]);
    // Life Cycle Hooks - END

    // Render - START
    return (
        <Portal
            node={
                typeof document !== "undefined" &&
                document.getElementById("magnet-app")
            }
        >
            <div id={id} className={getClasses()} style={getStyles()}>
                <MagnetOverlay
                    zIndex={200}
                    value={internalValue}
                    onClick={handleClose}
                />
                <MagnetCard
                    variant="elevated"
                    style={getCardStyles()}
                    theme={theme}
                >
                    <MagnetCardTitle>
                        <span>{title}</span>
                        <MagnetSpacer />
                        {onClose && (
                            <MagnetButton
                                icon
                                variant="text"
                                onClick={handleClose}
                                theme={theme}
                            >
                                <MagnetIcon>close</MagnetIcon>
                            </MagnetButton>
                        )}
                    </MagnetCardTitle>
                    <MagnetCardBody>{children}</MagnetCardBody>
                    {actions && actions.length > 0 && (
                        <MagnetCardActions>
                            {actions.map((action, index) => {
                                return (
                                    <MagnetButton
                                        key={action.label + index}
                                        theme={theme}
                                        {...action}
                                    >
                                        {action.label}
                                    </MagnetButton>
                                );
                            })}
                        </MagnetCardActions>
                    )}
                </MagnetCard>
            </div>
        </Portal>
    );
};

Dialog.displayName = "Dialog";

const MagnetDialog = React.memo(Dialog);

MagnetDialog.displayName = "MagnetDialog";

export { MagnetDialog };
