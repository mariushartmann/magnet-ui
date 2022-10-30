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
import { ITextareaProps } from "./textarea.types";

export const Textarea = ({
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
    rows = 5,
    rules = [],
    style = undefined,
    theme = "auto",
    value = ""
}: ITextareaProps): JSX.Element => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    const formContext = useContext(FormContext);
    const [internalAppendIcon, setInternalAppendIcon] =
        useState<string | undefined>(undefined);
    const [internalId, setInternalId] = useState(id ?? uniqid("textarea-"));
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
        (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-textarea": true,
            "magnet-textarea--value":
                internalValue !== undefined && internalValue !== "",
            "magnet-textarea--focus": hasFocus,
            "magnet-textarea--disabled": disabled,
            "magnet-textarea--error": error || (isDirty && !isValid),
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
        setInternalId(id ?? uniqid("textarea-"));
    }, [id]);

    useEffect(() => {
        setInternalValue(value);
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

    useEffect(() => {
        if (error) {
            setInternalAppendIcon("warning");
            return;
        }

        setInternalAppendIcon(appendIcon);
    }, [appendIcon, error]);
    // Life Cycle Hooks - END

    // Render - START
    const renderPrependIcon = useCallback(() => {
        if (!prependIcon) {
            return null;
        }

        return (
            <MagnetIcon
                className="magnet-textarea--prepend-icon"
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
        if (error) {
            onClickEvent = undefined;
        }

        return (
            <MagnetIcon
                className="magnet-textarea--append-icon"
                onClick={onClickEvent}
            >
                {internalAppendIcon}
            </MagnetIcon>
        );
    }, [error, internalAppendIcon, onAppendIconClick]);

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
            data-testid="magnet-textarea"
            className={getClasses()}
            style={getStyles()}
        >
            <div className={"magnet-textarea--container"}>
                {renderPrependIcon()}
                <div
                    className={"magnet-textarea--inner-container"}
                    onClick={onClick}
                >
                    <label htmlFor={internalId}>{label}</label>
                    <textarea
                        id={internalId}
                        value={internalValue}
                        placeholder={
                            !label || hasFocus ? placeholder : undefined
                        }
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled}
                        readOnly={readOnly}
                        ref={ref}
                        name={name}
                        rows={rows}
                    />
                </div>
                {clearable && internalValue && (
                    <div
                        className="magnet-textarea--append-icon"
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

Textarea.displayName = "Textarea";

const MagnetTextarea = React.memo(Textarea);

MagnetTextarea.displayName = "MagnetTextarea";

export { MagnetTextarea };
