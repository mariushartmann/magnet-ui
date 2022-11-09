// System imports
import React, { useState, useEffect, useContext, useCallback } from "react";
import clsx from "clsx";
import uniqid from "uniqid";

// Internal imports
import { MagnetIcon } from "../icon";
import { ThemeContext } from "../app";
import { FormContext } from "../form";
import { MagnetHint } from "../hint";
import { useValidation } from "../../hooks/useValidation";

// Component imports
import { ITextfieldProps } from "./textfield.types";

export const Textfield = ({
    appendIcon = undefined,
    className = undefined,
    clearable = false,
    disabled = false,
    error = false,
    hint = undefined,
    id = undefined,
    label,
    mode = "lazy",
    name = undefined,
    onAppendIconClick = undefined,
    onChange = undefined,
    onClear = undefined,
    onClick = undefined,
    onPrependIconClick = undefined,
    placeholder = undefined,
    prependIcon = undefined,
    readOnly = false,
    ref = undefined,
    rules = [],
    style = undefined,
    theme = "auto",
    type = "text",
    value = ""
}: ITextfieldProps): JSX.Element => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    const formContext = useContext(FormContext);
    const [internalAppendIcon, setInternalAppendIcon] =
        useState<string | undefined>(undefined);
    const [internalId, setInternalId] = useState(id ?? uniqid("textfield-"));
    const [showPassword, setShowPassword] = useState(false);
    const [internalValue, setInternalValue] = useState(value);
    const [hasFocus, setHasFocus] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, validationErrors] = useValidation(internalValue, rules);
    // Vars & States - END

    // Methods & Handler - START
    const handleFocus = useCallback(() => {
        setHasFocus(true);
    }, []);

    const handleBlur = useCallback(() => {
        setHasFocus(false);
        setIsDirty(true);
    }, []);

    const handleChange = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = ev.target.value;
            setInternalValue(newValue);
            if (onChange) {
                onChange(newValue);
            }
        },
        [onChange]
    );

    const handleClear = useCallback(() => {
        setInternalValue("");
        if (onChange) {
            onChange("");
        }
        if (onClear) {
            onClear();
        }
    }, [onChange, onClear]);

    const handlePasswordToggle = useCallback(() => {
        setShowPassword(!showPassword);
    }, [showPassword]);
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-textfield": true,
            "magnet-textfield--value":
                internalValue !== undefined && internalValue !== "",
            "magnet-textfield--focus": hasFocus,
            "magnet-textfield--disabled": disabled,
            "magnet-textfield--error": error || (isDirty && !isValid),
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
        hasFocus,
        isDirty,
        isValid,
        internalValue,
        theme
    ]);

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
        setInternalId(id ?? uniqid("textfield-"));
    }, [id]);

    useEffect(() => {
        setInternalValue(value);
    }, [value]);

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
            value: internalValue,
            isValid
        });
    }, [internalValue, isValid, formContext, name, internalId]);

    useEffect(() => {
        if (error) {
            setInternalAppendIcon("warning");
            return;
        }
        if (type === "password") {
            if (showPassword) {
                setInternalAppendIcon("visibility_off");
            } else {
                setInternalAppendIcon("visibility");
            }
            return;
        }
        setInternalAppendIcon(appendIcon);
    }, [appendIcon, error, type, showPassword]);
    // Life Cycle Hooks - END

    // Render - START
    const renderPrependIcon = useCallback(() => {
        if (!prependIcon) {
            return null;
        }

        return (
            <MagnetIcon
                className="magnet-textfield--prepend-icon"
                onClick={onPrependIconClick}
            >
                {prependIcon}
            </MagnetIcon>
        );
    }, [onPrependIconClick, prependIcon]);

    const renderAppendIcon = useCallback(() => {
        if (!internalAppendIcon) {
            return null;
        }

        let onClickEvent = onAppendIconClick;
        if (type === "password") {
            onClickEvent = handlePasswordToggle;
        }
        if (error) {
            onClickEvent = undefined;
        }

        return (
            <MagnetIcon
                className="magnet-textfield--append-icon"
                onClick={onClickEvent}
            >
                {internalAppendIcon}
            </MagnetIcon>
        );
    }, [
        error,
        handlePasswordToggle,
        internalAppendIcon,
        onAppendIconClick,
        type
    ]);

    const renderHint = useCallback(() => {
        if (!hint && validationErrors.length < 1) {
            return null;
        }

        const hints = [];
        if (hint && hint.length > 0) {
            hints.push(hint);
        }

        validationErrors.forEach((errMsg) => {
            hints.push(errMsg);
        });

        return <MagnetHint hints={hints} error={error} />;
    }, [hint, validationErrors, error]);

    return (
        <div
            data-testid="magnet-textfield"
            className={getClasses()}
            style={getStyles()}
        >
            <div className={"magnet-textfield--container"}>
                {renderPrependIcon()}
                <div
                    className={"magnet-textfield--inner-container"}
                    onClick={onClick}
                >
                    <label htmlFor={internalId}>{label}</label>
                    <input
                        id={internalId}
                        type={showPassword && !error ? "text" : type}
                        value={internalValue}
                        placeholder={
                            !label || hasFocus ? placeholder : undefined
                        }
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onClick={onClick}
                        disabled={disabled}
                        readOnly={readOnly}
                        ref={ref}
                        name={name}
                    />
                </div>
                {clearable && internalValue && (
                    <div
                        className="magnet-textfield--append-icon"
                        onClick={handleClear}
                        style={{ cursor: "pointer" }}
                    >
                        <MagnetIcon>close</MagnetIcon>
                    </div>
                )}
                {renderAppendIcon()}
            </div>
            {renderHint()}
        </div>
    );
};

Textfield.displayName = "Textfield";

const MagnetTextfield = React.memo(Textfield);

MagnetTextfield.displayName = "MagnetTextfield";

export { MagnetTextfield };
