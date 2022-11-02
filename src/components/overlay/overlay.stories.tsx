// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain } from "../app";
import { MagnetColumn, MagnetContainer, MagnetRow } from "../grid";

// component imports
import { MagnetOverlay, IOverlayProps } from ".";

export default {
    title: "Components/Overlays",
    component: MagnetOverlay,
    argTypes: {
        className: {
            table: {
                disable: true
            }
        },
        id: {
            table: {
                disable: true
            }
        },
        style: {
            table: {
                disable: true
            }
        },
        color: {
            control: { type: "color" }
        }
    }
} as ComponentMeta<typeof MagnetOverlay>;

const DefaultTemplate: ComponentStory<typeof MagnetOverlay> = (args) => (
    <MagnetMain>
        <MagnetContainer fluid>
            <MagnetRow>
                <MagnetColumn>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            width: 500,
                            height: 500,
                            border: "1px solid red"
                        }}
                    >
                        Content Box to show "absolute" prop
                        <MagnetOverlay {...args} />
                    </div>
                </MagnetColumn>
            </MagnetRow>
        </MagnetContainer>
    </MagnetMain>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
    absolute: false,
    color: undefined,
    onClick: undefined,
    opacity: 0.5,
    value: false,
    zIndex: undefined
} as IOverlayProps;
