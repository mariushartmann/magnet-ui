/* eslint-disable react/destructuring-assignment */
// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain } from "../app";
import { MagnetButton } from "../button";
import { MagnetColumn, MagnetContainer, MagnetRow } from "../grid";
import { MagnetImage } from "../image";

// component imports
import {
    MagnetCard,
    MagnetCardActions,
    MagnetCardBody,
    MagnetCardTitle,
    ICardProps
} from ".";

export default {
    title: "Components/Cards",
    component: MagnetCard,
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
} as ComponentMeta<typeof MagnetCard>;

const DefaultTemplate: ComponentStory<typeof MagnetCard> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetCard {...args} style={{ maxWidth: 400 }}>
                            <MagnetCardTitle>Card Title</MagnetCardTitle>
                            <MagnetCardBody>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et.
                            </MagnetCardBody>
                            <MagnetCardActions>
                                <MagnetButton theme={args.theme} variant="text">
                                    Secondary
                                </MagnetButton>
                                <MagnetButton theme={args.theme}>
                                    Primary
                                </MagnetButton>
                            </MagnetCardActions>
                        </MagnetCard>
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    disabled: false,
    href: undefined,
    onClick: undefined,
    theme: "auto",
    variant: "elevated"
} as ICardProps;

const WithImageTemplate: ComponentStory<typeof MagnetCard> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <MagnetCard {...args} style={{ maxWidth: 400 }}>
                            <MagnetImage
                                className="shape-lg"
                                src="https://placekitten.com/510/300?random"
                                aspectRatio={2}
                            />
                            <MagnetCardTitle>Card Title</MagnetCardTitle>
                            <MagnetCardBody>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et.
                            </MagnetCardBody>
                            <MagnetCardActions>
                                <MagnetButton theme={args.theme} variant="text">
                                    Secondary
                                </MagnetButton>
                                <MagnetButton theme={args.theme}>
                                    Primary
                                </MagnetButton>
                            </MagnetCardActions>
                        </MagnetCard>
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const WithImage = WithImageTemplate.bind({});
WithImage.args = {
    disabled: false,
    href: undefined,
    onClick: undefined,
    theme: "auto",
    variant: "elevated"
} as ICardProps;
