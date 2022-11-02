// system imports
import React, { useState, useRef } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain } from "../app";
import { MagnetContainer, MagnetRow, MagnetColumn } from "../grid";

// component imports
import { MagnetDialog, IDialogProps, IDialogAction } from ".";
import { MagnetButton } from "../button";
import { MagnetSelect } from "../select";
import { MagnetTextfield } from "../textfield";

export default {
    title: "Components/Dialogs",
    component: MagnetDialog,
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
} as ComponentMeta<typeof MagnetDialog>;

const DefaultTemplate: ComponentStory<typeof MagnetDialog> = (args) => {
    const anchorEl = useRef(null);
    const [value, setValue] = useState(false);
    const actions: IDialogAction[] = [
        { label: "Cancel", onClick: () => setValue(false), variant: "text" },
        { label: "Ok", onClick: () => setValue(false), variant: "text" }
    ];

    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetButton onClick={() => setValue(true)}>
                            Show Dialog
                        </MagnetButton>
                        <MagnetDialog
                            {...args}
                            actions={actions}
                            value={value}
                            onClose={() => setValue(false)}
                        >
                            Dialog Body Text
                            <MagnetSelect
                                clearable
                                label="Example Select"
                                options={[{ value: "test" }]}
                            />
                            <div ref={anchorEl}>
                                <MagnetTextfield
                                    clearable
                                    label="Example Texfield"
                                    readOnly
                                ></MagnetTextfield>
                            </div>
                        </MagnetDialog>
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    actions: [],
    theme: "auto",
    title: "Dialog Title",
    value: false,
    variant: "default",
    width: "auto"
} as IDialogProps;
