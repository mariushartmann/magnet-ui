// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import {
    MagnetMain,
    MagnetColumn,
    MagnetContainer,
    MagnetRow,
    MagnetRadio
} from "..";

// component imports
import { MagnetRadioGroup, IRadioGroupProps } from ".";

export default {
    title: "Radio Groups",
    component: MagnetRadioGroup,
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
        }
    }
} as ComponentMeta<typeof MagnetRadioGroup>;

const DefaultTemplate: ComponentStory<typeof MagnetRadioGroup> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetRadioGroup {...args}>
                            <MagnetRadio
                                value="1"
                                label="Value 1"
                            ></MagnetRadio>
                            <MagnetRadio
                                value="2"
                                label="Value 2"
                            ></MagnetRadio>
                            <MagnetRadio
                                value="3"
                                label="Value 3"
                            ></MagnetRadio>
                            <MagnetRadio
                                value="4"
                                label="Value 4"
                            ></MagnetRadio>
                        </MagnetRadioGroup>
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    error: false,
    hint: "",
    mode: "lazy",
    name: "story-radio-group",
    onChange: undefined,
    row: false,
    rules: undefined,
    theme: "auto",
    value: "1"
} as IRadioGroupProps;

export const WithRules = DefaultTemplate.bind({});
WithRules.args = {
    error: false,
    hint: "",
    mode: "lazy",
    name: "story-radio-group",
    onChange: undefined,
    row: false,
    rules: [
        (v) => {
            return !!v || "You have to select an option";
        }
    ],
    theme: "auto",
    value: undefined
} as IRadioGroupProps;
