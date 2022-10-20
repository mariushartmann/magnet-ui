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
    MagnetImage,
    MagnetCardBody
} from "../../components";

export default {
    title: "Utilities/Typography",
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

export const Typography = (): JSX.Element => {
    return (
        <>
            <style>{`
                code {
                    background: #eee;
                    color: #000;
                    padding: 2px 4px;
                    font-size: 1.05rem;
                    border-radius: 2px 2px 2px 2px;
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
                                <h1 className="mb-5">Typography</h1>
                                <p>
                                    Control the size and style of text using the
                                    Typography helper classes.
                                </p>
                            </div>

                            <div className="my-10">
                                <h2 className="mb-5">Type scale</h2>
                                <MagnetCard>
                                    <MagnetCardBody>
                                        <span className="d-block-xs display-h1">
                                            Headline 1
                                        </span>
                                        <span className="d-block-xs display-h2">
                                            Headline 2
                                        </span>
                                        <span className="d-block-xs display-h3">
                                            Headline 3
                                        </span>
                                        <span className="d-block-xs display-h4">
                                            Headline 4
                                        </span>
                                        <span className="d-block-xs display-h5">
                                            Headline 5
                                        </span>
                                        <span className="d-block-xs display-h6">
                                            Headline 6
                                        </span>
                                        <span className="d-block-xs display-body">
                                            Body
                                        </span>
                                        <span className="d-block-xs display-label">
                                            Label
                                        </span>
                                        <span className="d-block-xs display-caption">
                                            Caption
                                        </span>
                                    </MagnetCardBody>
                                </MagnetCard>
                            </div>

                            <div className="my-10">
                                <h2 className="mb-5">Usage</h2>
                                <p>
                                    The typegraphy helpers can be used with the
                                    <code>{".display-{value}"}</code> pattern.
                                </p>
                            </div>

                            <div className="my-10">
                                <h3 className="mb-5">
                                    The value property is one of:
                                </h3>
                                <ul className="mb-5">
                                    <li>
                                        <code>h1</code>
                                    </li>
                                    <li>
                                        <code>h2</code>
                                    </li>
                                    <li>
                                        <code>h3</code>
                                    </li>
                                    <li>
                                        <code>h4</code>
                                    </li>
                                    <li>
                                        <code>h5</code>
                                    </li>
                                    <li>
                                        <code>h6</code>
                                    </li>
                                    <li>
                                        <code>body</code>
                                    </li>
                                    <li>
                                        <code>label</code>
                                    </li>
                                    <li>
                                        <code>caption</code>
                                    </li>
                                </ul>
                            </div>
                        </MagnetColumn>
                    </MagnetRow>
                </MagnetContainer>
            </MagnetMain>
        </>
    );
};
