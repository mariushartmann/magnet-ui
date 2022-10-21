// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain, MagnetColumn, MagnetContainer, MagnetRow } from "..";

// component imports
import { MagnetTextarea, ITextareaProps } from ".";

export default {
    title: "Components/Textareas",
    component: MagnetTextarea,
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
} as ComponentMeta<typeof MagnetTextarea>;

const DefaultTemplate: ComponentStory<typeof MagnetTextarea> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetTextarea {...args} />
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
    label: "Textarea",
    mode: "lazy",
    name: "textarea-story",
    onAppendIconClick: undefined,
    onChange: undefined,
    onClick: undefined,
    onPrependIconClick: undefined,
    placeholder: "",
    prependIcon: undefined,
    readOnly: false,
    ref: undefined,
    rows: 5,
    rules: undefined,
    theme: "auto",
    value: undefined
} as ITextareaProps;

export const WithRules = DefaultTemplate.bind({});
WithRules.args = {
    appendIcon: undefined,
    clearable: false,
    disabled: false,
    error: false,
    hint: "",
    label: "Textarea",
    mode: "lazy",
    name: "textarea-story",
    onAppendIconClick: undefined,
    onChange: undefined,
    onClick: undefined,
    onPrependIconClick: undefined,
    placeholder: "",
    prependIcon: undefined,
    readOnly: false,
    ref: undefined,
    rows: 5,
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
    theme: "auto",
    value: undefined
} as ITextareaProps;
