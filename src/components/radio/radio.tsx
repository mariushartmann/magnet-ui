// system imports
import React, { useContext, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import uniqid from "uniqid";

// internal imports
import { FormContext } from "../form/form";
import { ThemeContext } from "../app";

// component imports
import { IRadioProps } from "./radio.types";

export const Radio = ({
    checked = false,
    className = undefined,
    disabled = false,
    error = false,
    id = undefined,
    label = undefined,
    name = undefined,
    onChange = undefined,
    onClick = undefined,
    ref = undefined,
    style = undefined,
    theme = "auto",
    value
}: IRadioProps): JSX.Element => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    const formContext = useContext(FormContext);
    const [internalId, setInternalId] = useState(id ?? uniqid("radio-"));
    const [internalChecked, setInternalChecked] = useState(checked);
    // Vars & States - END

    // Methods & Handler - START
    const handleChange = () => {
        if (disabled) {
            return;
        }

        if (internalChecked) {
            return;
        }

        setInternalChecked(true);
        if (onChange) {
            onChange(true);
        }
    };
    // Methods & Handler - END

    // ClassNames & Styles - START
    const classes = useMemo(() => {
        const classes = {
            "magnet-radio": true,
            "magnet-radio--has-value": internalChecked,
            "magnet-radio--disabled": disabled,
            "magnet-radio--error": error,
            "theme-light":
                theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark":
                theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [className, disabled, error, globalTheme, internalChecked, theme]);

    const checkmarkClasses = useMemo(() => {
        return clsx({
            "magnet-radio--checkmark": true,
            "magnet-radio--checkmark-show": internalChecked
        });
    }, [internalChecked]);

    const styles = useMemo((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...style };
    }, [style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    useEffect(() => {
        setInternalId(id ?? uniqid("radio-"));
    }, [id]);

    useEffect(() => {
        setInternalChecked(checked);
    }, [checked]);

    useEffect(() => {
        if (!formContext) {
            return;
        }

        if (formContext && !name) {
            console.error(
                `You have to define a name to ${internalId} if used inside an MagnetForm.`
            );
            return;
        }

        formContext.handlePublish({
            name,
            value: internalChecked,
            isValid: true
        });
    }, [internalChecked, formContext, name, internalId]);
    // Life Cycle Hooks - END

    // Render - START
    return (
        <div className={classes} style={styles} onClick={onClick}>
            <div className="magnet-radio--inner">
                <div className={"magnet-radio--input"} onClick={handleChange}>
                    <input
                        name={name}
                        id={internalId}
                        type="radio"
                        onChange={handleChange}
                        disabled={disabled}
                        checked={internalChecked}
                        ref={ref}
                        value={value}
                    />
                    <div
                        className={checkmarkClasses}
                        onClick={handleChange}
                    ></div>
                </div>
                {label && (
                    <label
                        htmlFor={internalId}
                        className={"magnet-radio--label"}
                    >
                        {label}
                    </label>
                )}
            </div>
        </div>
    );
};

Radio.displayName = "Radio";

const MagnetRadio = React.memo(Radio);

MagnetRadio.displayName = "MagnetRadio";

export { MagnetRadio };
