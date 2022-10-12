// system imports
import React, { useCallback, useContext, useEffect, useState } from "react";
import clsx from "clsx";
import uniqid from "uniqid";

// internal imports
import { FormContext } from "../form/form";
import { ThemeContext } from "../app";
import { MagnetIcon } from "../icon";
import { useValidation } from "../../utils/useValidation";

// component imports
import { ICheckboxProps } from "./checkbox.types";

export const Checkbox = ({
    children = undefined,
    className = undefined,
    disabled = false,
    error = false,
    hint = undefined,
    id = undefined,
    mode = "lazy",
    name = undefined,
    onChange = undefined,
    onClick = undefined,
    ref = undefined,
    rules = [],
    style = undefined,
    theme = "auto",
    value = false
}: React.PropsWithChildren<ICheckboxProps>): JSX.Element => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    const formContext = useContext(FormContext);
    const [internalId, setLazyId] = useState(id ?? uniqid("checkbox-"));
    const [internalValue, setLazyValue] = useState(value);
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, validationErrors] = useValidation(internalValue, rules);
    // Vars & States - END

    // Methods & Handler - START
    const handleChange = () => {
        const newValue = !internalValue;
        setLazyValue(newValue);
        setIsDirty(true);
        if (!disabled && onChange) {
            onChange(newValue);
        }
    };
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-checkbox": true,
            "magnet-checkbox--has-value": internalValue,
            "magnet-checkbox--disabled": disabled,
            "magnet-checkbox--error": error || (isDirty && !isValid),
            "theme-light":
                theme === "light" ||
                (theme === "auto" && globalTheme === "light"),
            "theme-dark":
                theme === "dark" || (theme === "auto" && globalTheme === "dark")
        };
        return clsx([classes, className]);
    }, [
        className,
        disabled,
        error,
        globalTheme,
        isDirty,
        isValid,
        internalValue,
        theme
    ]);

    const getCheckmarkClasses = useCallback(() => {
        return clsx({
            "magnet-checkbox--checkmark": true,
            "magnet-checkbox--checkmark-show": internalValue
        });
    }, [internalValue]);

    const getStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...style };
    }, [style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    useEffect(() => {
        setIsDirty(
            (formContext && formContext.mode === "force") || mode === "force"
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if ((formContext && formContext.isDirty) || mode === "force") {
            setIsDirty(true);
        }
    }, [formContext, mode]);

    useEffect(() => {
        setLazyId(id ?? uniqid("checkbox-"));
    }, [id]);

    useEffect(() => {
        setLazyValue(value);
    }, [value]);

    useEffect(() => {
        if (!formContext) {
            return;
        }

        if (!name) {
            console.error(
                `You have to define a name to ${internalId} if used inside an EForm.`
            );
            return;
        }

        formContext.handlePublish({
            name,
            value: internalValue,
            isValid
        });
    }, [internalValue, isValid, formContext, name, internalId]);
    // Life Cycle Hooks - END

    // Render - START
    const renderHint = useCallback(() => {
        if (!hint && validationErrors.length < 1) {
            return null;
        }

        return (
            <div className={"magnet-checkbox--hint"}>
                <span className="d-block-xs">{hint}</span>
                {(error || isDirty) &&
                    validationErrors.map((errMsg, index) => {
                        return (
                            <span className="d-block-xs" key={errMsg + index}>
                                {errMsg}
                            </span>
                        );
                    })}
            </div>
        );
    }, [error, hint, isDirty, validationErrors]);

    return (
        <div className={getClasses()} style={getStyles()} onClick={onClick}>
            <input
                id={internalId}
                className={"magnet-checkbox--input"}
                type="checkbox"
                onChange={handleChange}
                disabled={disabled}
                checked={internalValue}
                ref={ref}
            />
            <label htmlFor={internalId} className={"magnet-checkbox--label"}>
                {children}
            </label>
            <MagnetIcon
                className={getCheckmarkClasses()}
                size={22}
                disabled={disabled}
                onClick={handleChange}
            >
                check
            </MagnetIcon>
            {renderHint()}
        </div>
    );
};

Checkbox.displayName = "Checkbox";

const MagnetCheckbox = React.memo(Checkbox);

MagnetCheckbox.displayName = "MagnetCheckbox";

export { MagnetCheckbox };
