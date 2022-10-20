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
} from "../components";

export default {
    title: "Introduction",
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

export const Introduction = (): JSX.Element => {
    return (
        <MagnetMain>
            <MagnetContainer>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetCard style={{ position: "relative" }}>
                            <MagnetImage
                                src="img/overview.jpg"
                                aspectRatio={3}
                                style={{ borderRadius: "inherit" }}
                            />
                            <img
                                src="Magnet-UI.png"
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "10%",
                                    transform: "translateY(-50%)",
                                    height: "70%"
                                }}
                            />
                        </MagnetCard>

                        <div className="my-10">
                            <h1 className="mb-5">Magnet UI Framework</h1>

                            <p>
                                Getting started with the installation and the
                                basic application setup
                            </p>
                        </div>

                        <div className="my-10">
                            <h2 className="mb-5">1. Installation</h2>

                            <p>
                                Start with the package installation via npm or
                                yarn
                            </p>
                            <MagnetCard>
                                <MagnetCardBody>
                                    <pre>npm i magnet-ui</pre>
                                    <pre>yarn magnet-ui</pre>
                                </MagnetCardBody>
                            </MagnetCard>
                        </div>

                        <div className="my-10">
                            <h2 className="mb-5">2. Initialisation</h2>

                            <p>
                                Go into your root file and load the styling you
                                need
                            </p>
                            <ul>
                                <li>
                                    index.css - all styles core.css - components
                                    are
                                </li>
                                <li>
                                    excluded and have to be imported manually
                                </li>
                            </ul>
                            <MagnetCard className="my-3">
                                <MagnetCardBody>
                                    <pre>import "magnet-ui/css/index.css"</pre>
                                    <p className="py-2">or</p>
                                    <pre>import "magnet-ui/css/core.css"</pre>
                                </MagnetCardBody>
                            </MagnetCard>
                        </div>

                        <div className="my-10">
                            <h2 className="mb-5">3. Hello Magnet</h2>

                            <p>
                                You can use the following setup to start coding
                            </p>
                            <MagnetCard className="my-3">
                                <MagnetCardBody>
                                    <pre>
                                        {
                                            "export const MyFirstPage: React.FC = () => {"
                                        }
                                    </pre>
                                    <pre>{"    return ("}</pre>
                                    <pre>{"        <EApp hasAppBar>"}</pre>
                                    <pre>{"            <EAppBar fixed>"}</pre>
                                    <pre>
                                        {
                                            "                <EAppBarTitle>My Application</EAppBarTitle>"
                                        }
                                    </pre>
                                    <pre>{"            </EAppBar>"}</pre>
                                    <pre>{"            <EMain>"}</pre>
                                    <pre>{"                Hello Magnet"}</pre>
                                    <pre>{"            </EMain>"}</pre>
                                    <pre>{"        </EApp>"}</pre>
                                    <pre>{"    );"}</pre>
                                    <pre>{");"}</pre>
                                </MagnetCardBody>
                            </MagnetCard>
                        </div>
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};
