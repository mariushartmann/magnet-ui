import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss()
        // copy({
        //     targets: [
        //         {
        //             src: "dist/css/setup.css",
        //             dest: "build/css",
        //             rename: "setup.css"
        //         },
        //         {
        //             src: "dist/css/setup.css.map",
        //             dest: "build/css",
        //             rename: "setup.css.map"
        //         },
        //         {
        //             src: "dist/css/styles.css",
        //             dest: "build/css",
        //             rename: "styles.css"
        //         },
        //         {
        //             src: "dist/css/styles.css.map",
        //             dest: "build/css",
        //             rename: "styles.css.map"
        //         }
        //     ]
        // }),
    ]
};
