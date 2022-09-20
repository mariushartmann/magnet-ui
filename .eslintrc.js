module.exports = {
    ignorePatterns: [".eslintrc.js", "*.d.ts"],
    extends: ["@open-wc/eslint-config"],
    rules: {
        indent: "off",
        "comma-dangle": "off",
        quotes: ["error", "double"]
    }
};
