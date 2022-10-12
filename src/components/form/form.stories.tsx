/* eslint-disable arrow-body-style */
// system imports
import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import {
    MagnetCheckbox,
    MagnetColumn,
    MagnetContainer,
    MagnetMain,
    MagnetRow,
    MagnetButton
} from "..";

// component imports
import { MagnetForm, IFormProps } from ".";

export default {
    title: "Forms",
    component: MagnetForm,
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
} as ComponentMeta<typeof MagnetForm>;

const DefaultTemplate: ComponentStory<typeof MagnetForm> = (args) => {
    const [result, setResult] = useState<any>(null);

    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetForm {...args} onSubmit={setResult}>
                            <MagnetCheckbox
                                name="checkbox"
                                rules={[(v) => !!v || "Required field"]}
                            >
                                Checkbox
                            </MagnetCheckbox>
                            <MagnetButton type="submit">Submit</MagnetButton>
                        </MagnetForm>
                        <br></br>
                        Output after Submit:
                        <pre className="d-block-xs">
                            {JSON.stringify(result, null, 2)}
                        </pre>
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    isDirty: false,
    mode: "lazy",
    onSubmit: () => {}
} as IFormProps;
