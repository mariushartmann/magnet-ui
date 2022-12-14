const path = require("path");

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    addons: ["@storybook/addon-essentials"],
    staticDirs: ["../public", "../dist"],
    framework: "@storybook/react",
    webpackFinal: async (config, { configType }) => {
        const isDev = configType === "DEVELOPMENT";
        config.module.rules.push(
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "../")
            },
            {
                test: /\.module.(s(a|c)ss)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: isDev
                                    ? "[local]"
                                    : "[local]--[hash:base64:5]"
                            }
                        }
                    },
                    "sass-loader"
                ],
                include: path.resolve(__dirname, "../")
            }
        );

        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
                presets: [["react-app", { flow: false, typescript: true }]]
            }
        });
        config.resolve.extensions.push(".ts", ".tsx");

        return config;
    }
};
