/* eslint-disable react/destructuring-assignment */
// system imports
import React, { useRef, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

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

    const handleClick = () => {
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
                                { title: "Option 1", onClick: handleClick },
                                { title: "Option 2", onClick: handleClick },
                                { title: "Option 3", onClick: handleClick },
                                { title: "Option 4", onClick: handleClick },
                                { title: "Option 5", onClick: handleClick }
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
