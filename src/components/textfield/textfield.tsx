// System imports
import React, { useState, useEffect, useContext, useCallback } from "react";
import clsx from "clsx";
import uniqid from "uniqid";

// Internal imports
import { MagnetIcon } from "../icon";
import { ThemeContext } from "../app";
import { FormContext } from "../form";
import { MagnetHint } from "../hint";
import { useValidation } from "../../utils/useValidation";

// Component imports
import { IETextFieldProps } from "./textfield.types";

export const TextField = ({
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
}: IETextFieldProps): JSX.Element => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    const formContext = useContext(FormContext);
    const [lazyAppendIcon, setLazyAppendIcon] =
        useState<string | undefined>(undefined);
    const [lazyId, setLazyId] = useState(id ?? uniqid("textfield-"));
    const [showPassword, setShowPassword] = useState(false);
    const [lazyValue, setLazyValue] = useState(value);
    const [hasFocus, setHasFocus] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, validationErrors] = useValidation(lazyValue, rules);
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
            setLazyValue(newValue);
            if (onChange) {
                onChange(newValue);
            }
        },
        [onChange]
    );

    const handleClear = useCallback(() => {
        setLazyValue("");
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
                lazyValue !== undefined && lazyValue !== "",
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
        lazyValue,
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
        setLazyId(id ?? uniqid("textfield-"));
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
                `You have to define a name to ${lazyId} if used inside an EForm.`
            );
            return;
        }

        formContext.handlePublish({
            name,
            value: lazyValue,
            isValid
        });
    }, [lazyValue, isValid, formContext, name, lazyId]);

    useEffect(() => {
        if (error) {
            setLazyAppendIcon("exclamation-triangle");
            return;
        }
        if (type === "password") {
            if (showPassword) {
                setLazyAppendIcon("eye-slash");
            } else {
                setLazyAppendIcon("eye");
            }
            return;
        }
        setLazyAppendIcon(appendIcon);
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
        if (!lazyAppendIcon) {
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
                onClick={onAppendIconClick ? onClickEvent : undefined}
            ></MagnetIcon>
        );
    }, [error, handlePasswordToggle, lazyAppendIcon, onAppendIconClick, type]);

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
                    <label htmlFor={lazyId}>{label}</label>
                    <input
                        id={lazyId}
                        type={showPassword && !error ? "text" : type}
                        value={lazyValue}
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
                {clearable && lazyValue && (
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

TextField.displayName = "TextField";

const ETextField = React.memo(TextField);

ETextField.displayName = "ETextField";

export { ETextField };
