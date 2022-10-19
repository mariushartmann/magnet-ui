// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain } from "../app";
import { MagnetContainer } from "../grid";
import { MagnetIcon } from "../icon";

// component imports
import { MagnetButton, IButtonProps } from ".";

export default {
    title: "Components/Buttons",
    component: MagnetButton,
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
} as ComponentMeta<typeof MagnetButton>;

const DefaultTemplate: ComponentStory<typeof MagnetButton> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetButton {...args}>Button</MagnetButton>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    appendIcon: undefined,
    block: false,
    color: "primary",
    disabled: false,
    href: undefined,
    icon: false,
    loading: false,
    onClick: undefined,
    prependIcon: undefined,
    size: "medium",
    theme: "auto",
    variant: "elevated",
    type: "button"
} as IButtonProps;

const IconTemplate: ComponentStory<typeof MagnetButton> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetButton {...args}>
                    <MagnetIcon>add</MagnetIcon>
                </MagnetButton>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Icon = IconTemplate.bind({});
Icon.args = {
    appendIcon: undefined,
    block: false,
    color: "primary",
    disabled: false,
    href: undefined,
    icon: true,
    loading: false,
    onClick: undefined,
    prependIcon: undefined,
    size: "medium",
    theme: "auto",
    variant: "elevated",
    type: "button"
} as IButtonProps;
