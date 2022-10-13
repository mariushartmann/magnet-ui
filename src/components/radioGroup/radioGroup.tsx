// system imports
import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";
import clsx from "clsx";

// internal imports
import { FormContext } from "../form";
import { MagnetHint } from "../hint";
import { useValidation } from "../../utils/useValidation";

// component imports
import { IRadioGroupProps } from "./radioGroup.types";

export const RadioGroup = ({
    children = undefined,
    className = undefined,
    error = false,
    hint = undefined,
    id = undefined,
    mode = "lazy",
    name,
    onChange = undefined,
    row = false,
    rules = [],
    style = undefined,
    theme = "auto",
    value = undefined
}: React.PropsWithChildren<IRadioGroupProps>): JSX.Element => {
    // Vars & States - START
    const formContext = useContext(FormContext);
    const [internalValue, setInternalValue] = useState(value);
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, validationErrors] = useValidation(internalValue, rules);
    // Vars & States - END

    // Methods & Handler - START
    const handleChange = useCallback(
        (ev) => {
            const newValue = ev.target.value;
            setInternalValue(newValue);
            if (onChange) {
                onChange(newValue);
            }
        },
        [onChange]
    );
    // Methods & Handler - END

    // ClassNames & Styles - START
    const classes = useMemo(() => {
        const classes = {
            "magnet-radio-group": true,
            "magnet-radio-group--row": row,
            "magnet-radio-group--error": error || !isValid
        };
        return clsx([classes, className]);
    }, [row, error, isValid, className]);

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
        setInternalValue(value);
    }, [value]);

    const childs = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                name: name,
                checked: child.props.value === internalValue,
                error: (isDirty && !isValid) || error,
                theme
            });
        }
        return child;
    });

    useEffect(() => {
        if (!formContext) {
            return;
        }

        formContext.handlePublish({
            name,
            value: internalValue,
            isValid
        });
    }, [internalValue, isValid, formContext, name]);
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
        <div id={id} className={classes} style={styles} onChange={handleChange}>
            <div className="magnet-radio-group--container">{childs}</div>
            {renderHint()}
            {internalValue}
        </div>
    );
};

RadioGroup.displayName = "RadioGroup";

const MagnetRadioGroup = React.memo(RadioGroup);

MagnetRadioGroup.displayName = "MagnetRadioGroup";

export { MagnetRadioGroup };
