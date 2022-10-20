/* eslint-disable react/no-unescaped-entities */
// system imports
import React from "react";

// internal imports
import {
    MagnetMain,
    MagnetColumn,
    MagnetContainer,
    MagnetRow,
    MagnetCard,
    MagnetImage
} from "../../components";

export default {
    title: "Utilities/Colors",
    parameters: {
        previewTabs: {
            "storybook/docs/panel": {
                hidden: true
            },
            "storybook/addons/panel": {
                hidden: true
            }
        }
    }
};

export const Colors = (): JSX.Element => {
    return (
        <>
            <style>{`
                code {
                    background: #eee;
                    color: #000;
                    padding: 2px 4px;
                    font-size: 1.05rem;
                    border-radius: 4px 4px 4px 4px;
                }

                .color-palette-preview {
                    display: flex;
                    flex-direction: column;
                }

                .color-palette-preview .preview-row {
                    display: flex;
                    flex-direction: row;
                }

                .color-palette-preview .preview-row .preview-cell {
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    padding: 12px;
                }

                .color-palette-preview .preview-row .preview-cell .original-color-bubble {
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                }

                .color-tones {
                    display: flex;
                }

                .color-tones .color-name {
                    width: 100px;
                }

                .color-tones .color-number {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                }
            `}</style>
            <MagnetMain>
                <MagnetContainer>
                    <MagnetRow>
                        <MagnetColumn>
                            <MagnetCard>
                                <MagnetImage
                                    src="img/utilities-display.jpg"
                                    aspectRatio={3}
                                    style={{ borderRadius: "inherit" }}
                                />
                            </MagnetCard>

                            <div className="my-10">
                                <h1 className="mb-5">Colors</h1>
                                <p>
                                    The color system was inspired by the new{" "}
                                    <a
                                        href="https://m3.material.io/styles/color/overview"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Material 3
                                    </a>{" "}
                                    design system.
                                </p>

                                <div className="color-palette-preview">
                                    {[
                                        "Primary",
                                        "Secondary",
                                        "Success",
                                        "Warning",
                                        "Error",
                                        "Neutral"
                                    ].map((color) => {
                                        return (
                                            <div
                                                className="preview-row mb-2"
                                                key={color}
                                            >
                                                <div className="preview-cell display-label">
                                                    <div>
                                                        {color} Original Color
                                                    </div>
                                                    <div
                                                        className="original-color-bubble"
                                                        style={{
                                                            backgroundColor: `var(--${color.toLocaleLowerCase()}-original)`
                                                        }}
                                                    ></div>
                                                </div>
                                                <div
                                                    className="preview-cell display-label"
                                                    style={{
                                                        backgroundColor: `var(--${color.toLocaleLowerCase()}-40)`,
                                                        color: `var(--${color.toLocaleLowerCase()}-100)`
                                                    }}
                                                >
                                                    <div>{color}</div>
                                                    <div
                                                        className="mt-10"
                                                        style={{
                                                            textAlign: "right"
                                                        }}
                                                    >
                                                        {color}-40
                                                    </div>
                                                </div>
                                                <div
                                                    className="preview-cell display-label"
                                                    style={{
                                                        backgroundColor: `var(--${color.toLocaleLowerCase()}-100)`,
                                                        color: `var(--${color.toLocaleLowerCase()}-40)`
                                                    }}
                                                >
                                                    <div>On {color}</div>
                                                    <div
                                                        className="mt-10"
                                                        style={{
                                                            textAlign: "right"
                                                        }}
                                                    >
                                                        {color}-100
                                                    </div>
                                                </div>
                                                <div
                                                    className="preview-cell display-label"
                                                    style={{
                                                        backgroundColor: `var(--${color.toLocaleLowerCase()}-90)`,
                                                        color: `var(--${color.toLocaleLowerCase()}-10)`
                                                    }}
                                                >
                                                    <div>{color} Container</div>
                                                    <div
                                                        className="mt-10"
                                                        style={{
                                                            textAlign: "right"
                                                        }}
                                                    >
                                                        {color}-90
                                                    </div>
                                                </div>
                                                <div
                                                    className="preview-cell display-label"
                                                    style={{
                                                        backgroundColor: `var(--${color.toLocaleLowerCase()}-10)`,
                                                        color: `var(--${color.toLocaleLowerCase()}-90)`
                                                    }}
                                                >
                                                    <div>
                                                        On {color} Container
                                                    </div>
                                                    <div
                                                        className="mt-10"
                                                        style={{
                                                            textAlign: "right"
                                                        }}
                                                    >
                                                        {color}-10
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="my-10">
                                <h2 className="mb-5">Base colors</h2>

                                <p>
                                    We are using 6 base colors and generate all
                                    necessary alternative colors out of them.
                                </p>

                                <ul>
                                    <li>
                                        Primary -{" "}
                                        <code
                                            style={{
                                                backgroundColor:
                                                    "var(--primary-original)",
                                                color: "#ffffff"
                                            }}
                                        >
                                            #27359b
                                        </code>
                                    </li>
                                    <li>
                                        Secondary -{" "}
                                        <code
                                            style={{
                                                backgroundColor:
                                                    "var(--secondary-original)"
                                            }}
                                        >
                                            #1ea7fd
                                        </code>
                                    </li>
                                    <li>
                                        Success -{" "}
                                        <code
                                            style={{
                                                backgroundColor:
                                                    "var(--success-original)"
                                            }}
                                        >
                                            #22aa26
                                        </code>
                                    </li>
                                    <li>
                                        Warning -{" "}
                                        <code
                                            style={{
                                                backgroundColor:
                                                    "var(--warning-original)"
                                            }}
                                        >
                                            #fb8c00
                                        </code>
                                    </li>
                                    <li>
                                        Error -{" "}
                                        <code
                                            style={{
                                                backgroundColor:
                                                    "var(--error-original)"
                                            }}
                                        >
                                            #ff3e3b
                                        </code>
                                    </li>
                                    <li>
                                        Neutral -{" "}
                                        <code
                                            style={{
                                                backgroundColor:
                                                    "var(--neutral-original)"
                                            }}
                                        >
                                            #ffffff
                                        </code>
                                    </li>
                                </ul>
                            </div>

                            <div className="my-10">
                                <h3 className="mb-5">
                                    Auto generated color tones
                                </h3>

                                <p>
                                    You can find all generated colors in the{" "}
                                    <code>:root</code> of the stylesheet
                                </p>

                                <div>
                                    {[
                                        "Primary",
                                        "Secondary",
                                        "Success",
                                        "Warning",
                                        "Error",
                                        "Neutral"
                                    ].map((color) => {
                                        return (
                                            <div
                                                key={color}
                                                className="color-tones mb-2"
                                            >
                                                <div className="color-name">
                                                    {color}
                                                </div>
                                                {[
                                                    0, 10, 20, 30, 40, 50, 60,
                                                    70, 80, 99, 100
                                                ].map((i) => {
                                                    return (
                                                        <div
                                                            key={"primary" + i}
                                                            className="color-number"
                                                            style={{
                                                                backgroundColor: `var(--${color.toLocaleLowerCase()}-${i})`,
                                                                color:
                                                                    i < 50
                                                                        ? "#fff"
                                                                        : "#000"
                                                            }}
                                                        >
                                                            {i}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </MagnetColumn>
                    </MagnetRow>
                </MagnetContainer>
            </MagnetMain>
        </>
    );
};
