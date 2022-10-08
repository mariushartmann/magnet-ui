// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain } from "../app";
import { MagnetContainer } from "../grid";

// component imports
import { MagnetProgressSpinner, IProgressSpinnerProps } from ".";

export default {
    title: "Progress Spinner",
    component: MagnetProgressSpinner,
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
        onClick: { action: "onClick" }
    }
} as ComponentMeta<typeof MagnetProgressSpinner>;

const DefaultTemplate: ComponentStory<typeof MagnetProgressSpinner> = (
    args
) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetProgressSpinner {...args} />
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    size: 20
} as IProgressSpinnerProps;
