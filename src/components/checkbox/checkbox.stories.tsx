/* eslint-disable arrow-body-style */
// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain, MagnetColumn, MagnetContainer, MagnetRow } from "..";

// component imports
import { MagnetCheckbox, ICheckboxProps } from ".";

export default {
    title: "Checkboxes",
    component: MagnetCheckbox,
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
} as ComponentMeta<typeof MagnetCheckbox>;

const DefaultTemplate: ComponentStory<typeof MagnetCheckbox> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetCheckbox {...args}>Checkbox</MagnetCheckbox>
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
    mode: "lazy",
    name: "checkbox-story",
    rules: undefined,
    value: false,
    variant: "default"
} as ICheckboxProps;

export const WithRules = DefaultTemplate.bind({});
WithRules.args = {
    disabled: false,
    error: false,
    hint: "",
    mode: "lazy",
    name: "checkbox-story",
    rules: [(v) => !!v || "The checkbox must be checked"],
    value: false,
    variant: "default"
} as ICheckboxProps;
