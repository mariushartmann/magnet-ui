// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain } from "../app";
import { MagnetContainer } from "../grid";

// component imports
import { MagnetIcon, IIconProps } from ".";

export default {
    title: "Icons",
    component: MagnetIcon,
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
} as ComponentMeta<typeof MagnetIcon>;

const DefaultTemplate: ComponentStory<typeof MagnetIcon> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetIcon {...args}>search</MagnetIcon>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    disabled: false,
    onClick: undefined,
    size: 20,
    spin: false
} as IIconProps;
