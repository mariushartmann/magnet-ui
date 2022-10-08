// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports

// component imports
import { MagnetNavBar, MagnetNavBarLink, INavBarProps } from ".";

export default {
    title: "Nav Bars",
    component: MagnetNavBar,
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
} as ComponentMeta<typeof MagnetNavBar>;

const DefaultTemplate: ComponentStory<typeof MagnetNavBar> = (args) => {
    return (
        <MagnetNavBar {...args}>
            <MagnetNavBarLink icon="home" active>
                Home
            </MagnetNavBarLink>
            <MagnetNavBarLink icon="build">Link</MagnetNavBarLink>
            <MagnetNavBarLink icon="build" disabled>
                Disabled
            </MagnetNavBarLink>
            <MagnetNavBarLink icon="face">Profile</MagnetNavBarLink>
        </MagnetNavBar>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    theme: "auto",
    variant: "flat"
} as INavBarProps;
