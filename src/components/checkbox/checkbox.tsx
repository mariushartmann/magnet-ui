// system imports
import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";
import clsx from "clsx";
import uniqid from "uniqid";

// internal imports
import { FormContext } from "../form/form";
import { ThemeContext } from "../app";
import { MagnetIcon } from "../icon";
import { useValidation } from "../../utils/useValidation";

// component imports
import { ICheckboxProps } from "./checkbox.types";
import { MagnetHint } from "../hint";

export const Checkbox = ({
    className = undefined,
    disabled = false,
    error = false,
    hint = undefined,
    id = undefined,
    label = undefined,
    mode = "lazy",
    name = undefined,
    onChange = undefined,
    onClick = undefined,
    ref = undefined,
    rules = [],
    style = undefined,
    theme = "auto",
    value = false
}: ICheckboxProps): JSX.Element => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    const formContext = useContext(FormContext);
    const [internalId, setInternalId] = useState(id ?? uniqid("checkbox-"));
    const [internalValue, setInternalValue] = useState(value);
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, validationErrors] = useValidation(internalValue, rules);
    // Vars & States - END

    // Methods & Handler - START
    const handleChange = () => {
        if (disabled) {
            return;
        }

        const newValue = !internalValue;
        setInternalValue(newValue);
        setIsDirty(true);
        if (onChange) {
            onChange(newValue);
        }
    };
    // Methods & Handler - END

    // ClassNames & Styles - START
    const classes = useMemo(() => {
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

    const checkmarkClasses = useMemo(() => {
        return clsx({
            "magnet-checkbox--checkmark": true,
            "magnet-checkbox--checkmark-show": internalValue
        });
    }, [internalValue]);

    const styles = useMemo((): React.CSSProperties => {
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
        setInternalId(id ?? uniqid("checkbox-"));
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
    // Life Cycle Hooks - END

    // Render - START
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
        <div className={classes} style={styles} onClick={onClick}>
            <div className="magnet-checkbox--inner">
                <div
                    className={"magnet-checkbox--input"}
                    onClick={handleChange}
                >
                    <input
                        id={internalId}
                        type="checkbox"
                        onChange={handleChange}
                        disabled={disabled}
                        checked={internalValue}
                        ref={ref}
                    />
                    <MagnetIcon
                        className={checkmarkClasses}
                        size={22}
                        disabled={disabled}
                        onClick={handleChange}
                    >
                        check
                    </MagnetIcon>
                </div>
                {label && (
                    <label
                        htmlFor={internalId}
                        className={"magnet-checkbox--label"}
                    >
                        {label}
                    </label>
                )}
            </div>
            {renderHint()}
        </div>
    );
};

Checkbox.displayName = "Checkbox";

const MagnetCheckbox = React.memo(Checkbox);

MagnetCheckbox.displayName = "MagnetCheckbox";

export { MagnetCheckbox };
