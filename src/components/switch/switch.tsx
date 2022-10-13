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
import { ISwitchProps } from "./switch.types";
import { MagnetHint } from "../hint";

export const Switch = ({
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
}: ISwitchProps): JSX.Element => {
    // Vars & States - START
    const globalTheme = useContext(ThemeContext);
    const formContext = useContext(FormContext);
    const [internalId, setLazyId] = useState(id ?? uniqid("switch-"));
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
            "magnet-switch": true,
            "magnet-switch--has-value": internalValue,
            "magnet-switch--disabled": disabled,
            "magnet-switch--error": error || (isDirty && !isValid),
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
            "magnet-switch--checkmark": true,
            "magnet-switch--checkmark-show": internalValue
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
        setLazyId(id ?? uniqid("switch-"));
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
            <div className="magnet-switch--inner">
                <div className={"magnet-switch--input"} onClick={handleChange}>
                    <input
                        id={internalId}
                        type="checkbox"
                        onChange={handleChange}
                        disabled={disabled}
                        checked={internalValue}
                        ref={ref}
                    />
                    <div className={checkmarkClasses}>
                        <MagnetIcon
                            size={18}
                            disabled={disabled}
                            onClick={handleChange}
                        >
                            check
                        </MagnetIcon>
                    </div>
                </div>
                {label && (
                    <label
                        htmlFor={internalId}
                        className={"magnet-switch--label"}
                    >
                        {label}
                    </label>
                )}
            </div>
            {renderHint()}
        </div>
    );
};

Switch.displayName = "Switch";

const MagnetSwitch = React.memo(Switch);

MagnetSwitch.displayName = "MagnetSwitch";

export { MagnetSwitch };
