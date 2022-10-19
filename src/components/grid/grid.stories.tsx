/* eslint-disable react/destructuring-assignment */
// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain } from "../app";

// component imports
import { MagnetContainer, MagnetRow, MagnetColumn } from ".";

export default {
    title: "Components/Grid System",
    component: MagnetContainer,
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
} as ComponentMeta<typeof MagnetContainer>;

const ColInner = ({ children }: any) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: 8 }}>{children}</div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DefaultTemplate: ComponentStory<any> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid={args.fluid}>
                <MagnetRow noGutters={args.noGutters}>
                    <MagnetColumn>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                </MagnetRow>
                <MagnetRow noGutters={args.noGutters}>
                    <MagnetColumn>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                    <MagnetColumn>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                </MagnetRow>
                <MagnetRow noGutters={args.noGutters}>
                    <MagnetColumn>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                    <MagnetColumn>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                    <MagnetColumn>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                </MagnetRow>
                <MagnetRow noGutters={args.noGutters}>
                    <MagnetColumn>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                    <MagnetColumn>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                    <MagnetColumn>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                    <MagnetColumn>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>

            <MagnetContainer fluid={args.fluid} style={{ marginTop: 40 }}>
                <MagnetRow noGutters={args.noGutters}>
                    <MagnetColumn>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                    <MagnetColumn xs={6}>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                    <MagnetColumn>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                </MagnetRow>
                <MagnetRow noGutters={args.noGutters}>
                    <MagnetColumn xs={4}>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                    <MagnetColumn xs={8}>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                </MagnetRow>
                <MagnetRow noGutters={args.noGutters}>
                    <MagnetColumn xs={8}>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                    <MagnetColumn xs={4}>
                        <ColInner>Column</ColInner>
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    fluid: false,
    noGutters: false
};
