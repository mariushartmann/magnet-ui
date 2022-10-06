// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain } from "../app";
import { MagnetColumn, MagnetContainer, MagnetRow } from "../grid";

// component imports
import { MagnetImage, IImageProps } from ".";

export default {
    title: "Images",
    component: MagnetImage,
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
} as ComponentMeta<typeof MagnetImage>;

const style = {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "red"
};

const DefaultTemplate: ComponentStory<typeof MagnetImage> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <div style={{ width: 300 }}>
                            <MagnetImage {...args}></MagnetImage>
                        </div>
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    contain: false,
    src: "https://placekitten.com/510/300?random",
    style: style
} as IImageProps;

export const Contain = DefaultTemplate.bind({});
Contain.args = {
    contain: true,
    src: "https://placekitten.com/510/300?random",
    style: style
} as IImageProps;

const ApectRatioTemplate: ComponentStory<typeof MagnetImage> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetRow>
                    <MagnetColumn>
                        <h2>Aspect Ratio: 1</h2>
                        <h3>Cover</h3>
                        <div style={{ width: 300 }}>
                            <MagnetImage
                                {...args}
                                aspectRatio={1}
                            ></MagnetImage>
                        </div>
                        <h3>Contain</h3>
                        <div style={{ width: 300 }}>
                            <MagnetImage
                                {...args}
                                aspectRatio={1}
                                contain
                            ></MagnetImage>
                        </div>
                        <h2>Aspect Ratio: 2</h2>
                        <h3>Cover</h3>
                        <div style={{ width: 300 }}>
                            <MagnetImage
                                {...args}
                                aspectRatio={2}
                            ></MagnetImage>
                        </div>
                        <h3>Contain</h3>
                        <div style={{ width: 300 }}>
                            <MagnetImage
                                {...args}
                                aspectRatio={2}
                                contain
                            ></MagnetImage>
                        </div>
                    </MagnetColumn>
                </MagnetRow>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const AspectRatio = ApectRatioTemplate.bind({});
AspectRatio.args = {
    src: "https://placekitten.com/510/300?random",
    style: style
} as IImageProps;
