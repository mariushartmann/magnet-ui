// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports

// component imports
import { MagnetNavRail, MagnetNavRailLink, INavRailProps } from ".";

export default {
    title: "Components/Nav Rails",
    component: MagnetNavRail,
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
} as ComponentMeta<typeof MagnetNavRail>;

const DefaultTemplate: ComponentStory<typeof MagnetNavRail> = (args) => {
    return (
        <MagnetNavRail {...args}>
            <MagnetNavRailLink icon="home" active>
                Home
            </MagnetNavRailLink>
            <MagnetNavRailLink icon="build">Link</MagnetNavRailLink>
            <MagnetNavRailLink icon="build" disabled>
                Disabled
            </MagnetNavRailLink>
            <MagnetNavRailLink icon="face">Profile</MagnetNavRailLink>
        </MagnetNavRail>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    theme: "auto",
    variant: "flat"
} as INavRailProps;
