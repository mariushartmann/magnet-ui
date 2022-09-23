import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
    namespace: "magnet-ui",
    plugins: [sass()],
    outputTargets: [
        {
            type: "dist"
        }
        // {
        //   type: 'dist',
        //   esmLoaderPath: '../loader',
        // },
        // {
        //   type: 'dist-custom-elements',
        // },
        // {
        //   type: 'docs-readme',
        // },
        // {
        //   type: 'www',
        //   serviceWorker: null, // disable service workers
        // },
    ]
};
