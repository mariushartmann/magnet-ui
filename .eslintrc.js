module.exports = {
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module"
    },
    ignorePatterns: [".eslintrc.js", "*.d.ts"],
    plugins: ["@typescript-eslint", "unused-imports"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:storybook/recommended"
    ],
    rules: {
        "require-await": ["error"],
        "comma-dangle": ["error", "never"],
        camelcase: "off",
        "@typescript-eslint/array-type": "error",
        indent: "off",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: true
                }
            }
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "typeLike",
                format: ["PascalCase"]
            },
            {
                selector: "function",
                format: ["camelCase"]
            },
            {
                selector: "method",
                format: ["camelCase"]
            },
            {
                selector: "memberLike",
                modifiers: ["private", "protected"],
                format: ["camelCase"],
                leadingUnderscore: "require"
            },
            {
                selector: "enumMember",
                format: ["PascalCase"]
            },
            {
                selector: "variable",
                types: ["boolean"],
                format: ["camelCase"]
            },
            {
                selector: "variable",
                format: ["PascalCase", "camelCase", "UPPER_CASE"]
            },
            {
                selector: "typeParameter",
                format: ["PascalCase"],
                prefix: ["T"]
            },
            {
                selector: "parameter",
                format: ["camelCase"]
            },
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: true
                }
            }
        ],
        quotes: "off",
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/semi": ["error", "always"],
        "arrow-body-style": ["error", "always"],
        curly: "error",
        eqeqeq: ["error", "always"],
        "id-blacklist": [
            "error",
            "warn",
            "any",
            "number",
            "string",
            "boolean",
            "Undefined",
            "err",
            "e",
            "cb",
            "callback"
        ],
        "no-null/no-null": "off",
        "no-redeclare": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-unused-expressions": "error",
        "no-var": "error",
        "spaced-comment": [
            "error",
            "always",
            {
                markers: ["/"]
            }
        ],
        "no-irregular-whitespace": "error",
        "brace-style": ["error", "1tbs"],
        "quote-props": ["off"],
        "@typescript-eslint/no-inferrable-types": ["off"],
        "unused-imports/no-unused-imports": ["error"],
        "unused-imports/no-unused-vars": ["warn"],
        "prefer-destructuring": [
            "error",
            {
                object: true,
                array: false
            }
        ],
        "react/destructuring-assignment": ["error", "always"]
    }
};
