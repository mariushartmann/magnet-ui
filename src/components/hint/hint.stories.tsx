/* eslint-disable arrow-body-style */
// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain, MagnetColumn, MagnetContainer, MagnetRow } from "..";

// component imports
import { MagnetHint, IHintProps } from ".";

export default {
    title: "Components/Hints",
    component: MagnetHint,
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
} as ComponentMeta<typeof MagnetHint>;

const DefaultTemplate: ComponentStory<typeof MagnetHint> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetHint {...args} />
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    error: false,
    hints: ["This is a hint text"],
    theme: "auto"
} as IHintProps;

export const Multiple = DefaultTemplate.bind({});
Multiple.args = {
    error: false,
    hints: ["This is a hint text", "This is another hint text"],
    theme: "auto"
} as IHintProps;
