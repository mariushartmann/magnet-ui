/* eslint-disable arrow-body-style */
// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain, MagnetColumn, MagnetContainer, MagnetRow } from "..";

// component imports
import { MagnetSwitch, ISwitchProps } from ".";

export default {
    title: "Switches",
    component: MagnetSwitch,
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
        onChange: { action: "onChange" }
    }
} as ComponentMeta<typeof MagnetSwitch>;

const DefaultTemplate: ComponentStory<typeof MagnetSwitch> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetSwitch {...args} />
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    disabled: false,
    error: false,
    hint: "",
    label: "",
    mode: "lazy",
    name: "switch-story",
    rules: undefined,
    value: false,
    variant: "default"
} as ISwitchProps;

export const WithRules = DefaultTemplate.bind({});
WithRules.args = {
    disabled: false,
    error: false,
    hint: "",
    label: "",
    mode: "lazy",
    name: "switch-story",
    rules: [(v) => !!v || "The switch must be checked"],
    value: false,
    variant: "default"
} as ISwitchProps;
