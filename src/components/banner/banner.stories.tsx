// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain } from "../..";

// component imports
import { MagnetBanner, IBannerProps } from ".";

export default {
    title: "Banner",
    component: MagnetBanner,
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
} as ComponentMeta<typeof MagnetBanner>;

const DefaultTemplate: ComponentStory<typeof MagnetBanner> = (args) => {
    return (
        <MagnetMain>
            <MagnetBanner {...args}>
                Hey! I am a pretty nice banner :)
            </MagnetBanner>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    hideIcon: false,
    icon: undefined,
    onClose: undefined,
    severity: "info",
    theme: "auto",
    title: undefined,
    variant: "elevated"
} as IBannerProps;

const TitleTemplate: ComponentStory<typeof MagnetBanner> = (args) => {
    return (
        <MagnetMain>
            <MagnetBanner {...args}>
                Hey! I am a pretty nice banner :)
            </MagnetBanner>
        </MagnetMain>
    );
};

export const Title = TitleTemplate.bind({});
Title.args = {
    hideIcon: false,
    icon: undefined,
    onClose: undefined,
    severity: "info",
    theme: "auto",
    title: "Banner title",
    variant: "elevated"
} as IBannerProps;

const ActionsTemplate: ComponentStory<typeof MagnetBanner> = (args) => {
    return (
        <MagnetMain>
            <MagnetBanner {...args}>
                Hey! I am a pretty nice banner :)
            </MagnetBanner>
        </MagnetMain>
    );
};

export const Actions = ActionsTemplate.bind({});
Actions.args = {
    actions: [
        { label: "Cancel", variant: "text" },
        { label: "Ok", variant: "text" }
    ],
    hideIcon: false,
    icon: undefined,
    onClose: undefined,
    severity: "info",
    theme: "auto",
    title: "Banner title",
    variant: "elevated"
} as IBannerProps;
