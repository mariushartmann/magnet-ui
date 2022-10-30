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
import { MagnetPopover, IPopoverProps } from "./";

export default {
    title: "Components/Popover",
    component: MagnetPopover,
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
} as ComponentMeta<typeof MagnetPopover>;

const DefaultTemplate: ComponentStory<typeof MagnetPopover> = (args) => {
    const anchorRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
    const [internalValue, setInternalValue] = useState(args.value);

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
                            Toggle Popover
                        </MagnetButton>
                        <MagnetPopover
                            {...args}
                            anchorEl={anchorRef}
                            value={internalValue}
                            onOutsideClick={() => setInternalValue(false)}
                        >
                            This is an example content
                        </MagnetPopover>
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
} as IPopoverProps;
