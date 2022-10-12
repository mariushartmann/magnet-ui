// system imports
import React, { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

// internal imports

// component imports
import {
    IFormProps,
    IFormContext,
    IHandlePublishBody,
    IFormData
} from "./form.types";

export const FormContext = React.createContext<IFormContext>({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handlePublish: () => {},
    isDirty: false,
    mode: "lazy"
});

const Form = ({
    children = undefined,
    className = undefined,
    id = undefined,
    isDirty = false,
    mode = "lazy",
    onSubmit,
    onValidityChange = undefined,
    ref,
    style = undefined
}: React.PropsWithChildren<IFormProps>) => {
    // Vars & States - START
    const [isValid, setIsValid] = useState(true);
    const [lazyIsDirty, setLazyIsDirty] = useState(isDirty);
    const formData = useRef<IFormData>({});
    // Vars & States - END

    // Methods & Handler - START
    const checkValidity = useCallback(() => {
        let isValidTmp = true;
        Object.values(formData.current).map((value) => {
            if (!value.isValid) {
                isValidTmp = false;
            }
        });
        setIsValid(isValidTmp);
    }, []);

    const handlePublish = useCallback(
        (data: IHandlePublishBody) => {
            const formDataClone = { ...formData.current };
            formDataClone[data.name] = {
                value: data.value,
                isValid: data.isValid
            };
            formData.current = formDataClone;
            checkValidity();
        },
        [checkValidity]
    );

    const handleSubmit = useCallback(
        (ev: React.FormEvent<HTMLFormElement>) => {
            setLazyIsDirty(true);
            if (onSubmit && isValid) {
                onSubmit(
                    Object.entries(formData.current).map(([key, value]) => {
                        return { key, value: value.value };
                    })
                );
            }
            ev.preventDefault();
        },
        [isValid, onSubmit]
    );
    // Methods & Handler - END

    // ClassNames & Styles - START
    const getClasses = useCallback(() => {
        const classes = {
            "magnet-form": true
        };

        return clsx([classes, className]);
    }, [className]);

    const getStyles = useCallback((): React.CSSProperties => {
        const styleList: React.CSSProperties = {};

        return { ...styleList, ...style };
    }, [style]);
    // ClassNames & Styles - END

    // Life Cycle Hooks - START
    useEffect(() => {
        if (isDirty) {
            setLazyIsDirty(isDirty);
        }
    }, [isDirty]);

    useEffect(() => {
        if (onValidityChange) {
            onValidityChange(isValid);
        }
    }, [isValid, onValidityChange]);
    // Life Cycle Hooks - END

    // Render - START
    return (
        <FormContext.Provider
            value={{ isDirty: lazyIsDirty, mode, handlePublish }}
        >
            <form
                id={id}
                className={getClasses()}
                onSubmit={handleSubmit}
                style={getStyles()}
                ref={ref}
            >
                {children}
            </form>
        </FormContext.Provider>
    );
};

Form.displayName = "Form";

const MagnetForm = React.memo(Form);

MagnetForm.displayName = "MagnetForm";

export { MagnetForm };
