/* eslint-disable react/destructuring-assignment */
// system imports
import React, { useRef, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// internal imports
import {
    MagnetButton,
    MagnetColumn,
    MagnetContainer,
    MagnetMain,
    MagnetRow
} from "../..";

// component imports
import { MagnetMenu, IMenuProps } from ".";
import { MagnetListItem } from "../list";

export default {
    title: "Components/Menus",
    component: MagnetMenu,
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
} as ComponentMeta<typeof MagnetMenu>;

const DefaultTemplate: ComponentStory<typeof MagnetMenu> = (args) => {
    const anchorRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
    const [internalValue, setInternalValue] = useState(args.value);

    const handleClick = (option) => {
        action(option + " clicked")();
        setInternalValue(false);
    };

    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetButton
                            ref={anchorRef}
                            onClick={(e) => {
                                setInternalValue(!internalValue);
                            }}
                        >
                            Toggle Menu
                        </MagnetButton>
                        <MagnetMenu
                            {...args}
                            anchorEl={anchorRef}
                            value={internalValue}
                            onOutsideClick={() => setInternalValue(false)}
                            options={[
                                {
                                    prependIcon: "person",
                                    title: "Profile",
                                    onClick: () => handleClick("Profile")
                                },
                                {
                                    prependIcon: "person",
                                    title: "My account",
                                    onClick: () => handleClick("My account")
                                },
                                {
                                    prependIcon: "person_add",
                                    title: "Add another account",
                                    onClick: () =>
                                        handleClick("Add another account")
                                },
                                {
                                    prependIcon: "Settings",
                                    title: "Settings",
                                    onClick: () => handleClick("Settings")
                                },
                                {
                                    prependIcon: "logout",
                                    title: "Logout",
                                    onClick: () => handleClick("Logout")
                                }
                            ]}
                        />
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    align: "left",
    onOutsideClick: undefined,
    theme: "auto",
    width: "auto",
    value: false
} as IMenuProps;
