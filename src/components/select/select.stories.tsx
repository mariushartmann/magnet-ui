// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain, MagnetColumn, MagnetContainer, MagnetRow } from "..";

// component imports
import { MagnetSelect, ISelectProps } from ".";

export default {
    title: "Components/Selects",
    component: MagnetSelect,
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
} as ComponentMeta<typeof MagnetSelect>;

const DefaultTemplate: ComponentStory<typeof MagnetSelect> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetSelect {...args} />
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    appendIcon: undefined,
    clearable: false,
    disabled: false,
    error: false,
    hint: "",
    label: "Select",
    mode: "lazy",
    name: "select-story",
    onAppendIconClick: undefined,
    onChange: undefined,
    onClick: undefined,
    onPrependIconClick: undefined,
    options: [...Array(20)].map((_, i) => {
        return {
            value: String(i + 1),
            text: `Option ${i + 1}`
        };
    }),
    placeholder: "",
    prependIcon: undefined,
    readOnly: false,
    ref: undefined,
    rules: undefined,
    theme: "auto",
    value: undefined
} as ISelectProps;

export const WithRules = DefaultTemplate.bind({});
WithRules.args = {
    appendIcon: undefined,
    clearable: false,
    disabled: false,
    error: false,
    hint: "",
    label: "Select",
    mode: "lazy",
    name: "select-story",
    onAppendIconClick: undefined,
    onChange: undefined,
    onClick: undefined,
    onPrependIconClick: undefined,
    options: [...Array(20)].map((_, i) => {
        return {
            value: String(i + 1),
            text: `Option ${i + 1}`
        };
    }),
    placeholder: "",
    prependIcon: undefined,
    readOnly: false,
    ref: undefined,
    rules: [
        (v) => {
            return !!v || "You should select an option";
        }
    ],
    theme: "auto",
    value: undefined
} as ISelectProps;
