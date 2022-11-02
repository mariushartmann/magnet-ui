// System imports
import React, {
    useState,
    useEffect,
    useContext,
    useCallback,
    useRef
} from "react";
import clsx from "clsx";
import uniqid from "uniqid";

// Internal imports
import { MagnetIcon } from "../icon";
import { ThemeContext } from "../app";
import { FormContext } from "../form";
import { MagnetHint } from "../hint";
import { MagnetMenu } from "../menu";
import { useValidation } from "../../hooks/useValidation";

// Component imports
import { ISelectOption, ISelectProps } from "./select.types";

export const Select = ({
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
    options = [],
    placeholder = undefined,
    prependIcon = undefined,
    readOnly = false,
    ref = undefined,
    rules = [],
    style = undefined,
    theme = "auto",
    value = undefined
}: ISelectProps): JSX.Element => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    const formContext = useContext(FormContext);
    const anchorRef = useRef(null);
    const [internalAppendIcon, setInternalAppendIcon] =
        useState<string | undefined>(undefined);
    const [internalId, setInternalId] = useState(id ?? uniqid("select-"));
    const [internalValue, setInternalValue] = useState(value);
    const [hasFocus, setHasFocus] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, validationErrors] = useValidation(internalValue, rules);
    // Vars & States - END

    // Methods & Handler - START
    const handleFocus = useCallback((): void => {
        if (!disabled || readOnly) {
            document.getElementById(id)?.focus();
            setTimeout(() => {
                return setHasFocus(true);
            }, 100);
        }
    }, [disabled, id, readOnly]);

    const handleBlur = useCallback(() => {
        setTimeout(() => {
            setIsDirty(true);
            setHasFocus(false);
        }, 100);
    }, []);

    const handleChange = useCallback(
        (newValue: ISelectOption): void => {
            setInternalValue(newValue);
            if (onChange) {
                onChange(newValue);
            }
            setHasFocus(false);
        },
        [onChange]
    );

    const handleClear = useCallback(() => {
        setInternalValue(undefined);
        if (onChange) {
            onChange(undefined);
        }
        if (onClear) {
            onClear();
        }
    }, [onChange, onClear]);
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-select": true,
            "magnet-select--value": internalValue !== undefined,
            "magnet-select--focus": hasFocus,
            "magnet-select--disabled": disabled,
            "magnet-select--error": error || (isDirty && !isValid),
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
        setInternalId(id ?? uniqid("select-"));
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
                className="magnet-select--prepend-icon"
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
                className="magnet-select--append-icon"
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
        <>
            <div
                data-testid="magnet-select"
                className={getClasses()}
                style={getStyles()}
                ref={anchorRef}
            >
                <div className={"magnet-select--container"}>
                    {renderPrependIcon()}
                    <div
                        className={"magnet-select--inner-container"}
                        onClick={onClick}
                    >
                        <label htmlFor={internalId}>{label}</label>
                        <input
                            id={internalId}
                            type="text"
                            value={
                                internalValue
                                    ? internalValue.text
                                        ? internalValue?.text
                                        : String(internalValue?.value)
                                    : ""
                            }
                            placeholder={
                                !label || hasFocus ? placeholder : undefined
                            }
                            onFocus={handleFocus}
                            onClick={onClick}
                            disabled={disabled}
                            readOnly={true}
                            ref={ref}
                            name={name}
                        />
                    </div>
                    {clearable && internalValue && (
                        <div
                            className="magnet-select--append-icon"
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
            <MagnetMenu
                anchorEl={anchorRef}
                width="match-parent"
                value={hasFocus}
                onOutsideClick={handleBlur}
                theme={theme}
                options={options.map((o) => {
                    return {
                        title: o.text ? o.text : o.value,
                        onClick: () => {
                            handleChange(o);
                        }
                    };
                })}
            />
        </>
    );
};

Select.displayName = "Select";

const MagnetSelect = React.memo(Select);

MagnetSelect.displayName = "MagnetSelect";

export { MagnetSelect };
