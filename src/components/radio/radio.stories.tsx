/* eslint-disable arrow-body-style */
// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain, MagnetColumn, MagnetContainer, MagnetRow } from "..";

// component imports
import { MagnetRadio, IRadioProps } from ".";

export default {
    title: "Components/Radios",
    component: MagnetRadio,
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
} as ComponentMeta<typeof MagnetRadio>;

const DefaultTemplate: ComponentStory<typeof MagnetRadio> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetRadio {...args} />
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    checked: false,
    disabled: false,
    error: false,
    hint: "",
    label: "",
    mode: "lazy",
    name: "radio-story",
    rules: undefined,
    value: "1"
} as IRadioProps;
