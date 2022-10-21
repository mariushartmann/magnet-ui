// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain, MagnetColumn, MagnetContainer, MagnetRow } from "..";

// component imports
import { MagnetTextfield, ITextfieldProps } from ".";

export default {
    title: "Components/Textfields",
    component: MagnetTextfield,
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
} as ComponentMeta<typeof MagnetTextfield>;

const DefaultTemplate: ComponentStory<typeof MagnetTextfield> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetTextfield {...args} />
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
    label: "Textfield",
    mode: "lazy",
    name: "textfield-story",
    onAppendIconClick: undefined,
    onChange: undefined,
    onClick: undefined,
    onPrependIconClick: undefined,
    placeholder: "",
    prependIcon: undefined,
    readOnly: false,
    ref: undefined,
    rules: undefined,
    theme: "auto",
    type: "text",
    value: undefined
} as ITextfieldProps;

export const WithRules = DefaultTemplate.bind({});
WithRules.args = {
    appendIcon: undefined,
    clearable: false,
    disabled: false,
    error: false,
    hint: "",
    label: "Textfield",
    mode: "lazy",
    name: "textfield-story",
    onAppendIconClick: undefined,
    onChange: undefined,
    onClick: undefined,
    onPrependIconClick: undefined,
    placeholder: "",
    prependIcon: undefined,
    readOnly: false,
    ref: undefined,
    rules: [
        (v) => {
            return !!v || "The textarea should not be empty";
        },
        (v) => {
            return (
                (v && v.length < 20) ||
                "The text should be shorter than 20 characters"
            );
        }
    ],
    singleLine: false,
    theme: "auto",
    type: "text",
    value: undefined
} as ITextfieldProps;
