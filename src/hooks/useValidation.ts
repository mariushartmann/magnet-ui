// System imports

// Internal imports
import { InputValidationRules } from "../types";

export function useValidation(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    value: any,
    rules: InputValidationRules
): [boolean, string[]] {
    const errors = [];
    for (let index = 0; index < rules.length; index++) {
        const rule = rules[index];
        const valid = typeof rule === "function" ? rule(value) : rule;

        if (valid === false || typeof valid === "string") {
            errors.push(valid || "");
        } else if (typeof valid !== "boolean") {
            console.error(
                `Rules should return a string or boolean, received '${typeof valid}' instead`
            );
        }
    }

    return [errors.length < 1, errors];
}
