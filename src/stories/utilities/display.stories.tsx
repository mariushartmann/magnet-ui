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
    title: "Utilities/Display Helpers",
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

export const DisplayHelpers = (): JSX.Element => {
    return (
        <>
            <style>{`
                code {
                    background: #fff;
                    color: #000;
                    padding: 4px 8px;
                    font-size: 1.05rem;
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
                                <h1 className="mb-5">Display helpers</h1>
                                <p>
                                    The display helpers allow you to control the
                                    display of content. This includes being
                                    conditionally visible based upon the current
                                    viewport, or the actual element display
                                    type.
                                </p>
                            </div>

                            <div className="my-10">
                                <h2 className="mb-5">How it works</h2>
                                <p>
                                    Specify the elements display property. These
                                    classes can be applied to all breakpoints
                                    from <code>xs</code> to <code>xl</code>.
                                </p>
                            </div>

                            <div className="my-10">
                                <h3 className="mb-5">
                                    The property applies the type of spacing:
                                </h3>
                                <div>
                                    <code>{".d-{value}-{breakpoint}"}</code> for
                                    xs, sm, md, lg and xl
                                </div>
                            </div>

                            <div className="my-10">
                                <h3 className="mb-5">
                                    The value property is one of:
                                </h3>
                                <ul className="mb-5">
                                    <li>
                                        <code>none</code>
                                    </li>
                                    <li>
                                        <code>inline</code>
                                    </li>
                                    <li>
                                        <code>inline-block</code>
                                    </li>
                                    <li>
                                        <code>block</code>
                                    </li>
                                    <li>
                                        <code>table</code>
                                    </li>
                                    <li>
                                        <code>table-cell</code>
                                    </li>
                                    <li>
                                        <code>table-row</code>
                                    </li>
                                    <li>
                                        <code>flex</code>
                                    </li>
                                    <li>
                                        <code>inline-flex</code>
                                    </li>
                                </ul>
                                <p>
                                    When setting a specific breakpoint for a
                                    display helper class, it will apply to all
                                    screen widths from the designation and up.
                                    For example, <code>d-lg-flex</code> will
                                    apply to <code>lg</code> and <code>xl</code>{" "}
                                    size screens.
                                </p>
                            </div>
                        </MagnetColumn>
                    </MagnetRow>
                </MagnetContainer>
            </MagnetMain>
        </>
    );
};
