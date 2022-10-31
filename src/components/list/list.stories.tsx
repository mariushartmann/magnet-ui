// system imports
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports
import { MagnetMain } from "../app";
import { MagnetContainer } from "../grid";

// component imports
import { MagnetList, IListProps, MagnetListItem } from ".";

export default {
    title: "Components/Lists",
    component: MagnetList,
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
} as ComponentMeta<typeof MagnetList>;

const DefaultTemplate: ComponentStory<typeof MagnetList> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetList {...args}>
                    {Array.apply(null, Array(100)).map((_, i) => {
                        return (
                            <MagnetListItem key={"list-item" + i}>
                                List Item {i + 1}
                            </MagnetListItem>
                        );
                    })}
                </MagnetList>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
    showDividers: false,
    theme: "auto"
} as IListProps;

const ClickableTemplate: ComponentStory<typeof MagnetList> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetList {...args}>
                    {Array.apply(null, Array(100)).map((_, i) => {
                        return (
                            <MagnetListItem
                                key={"list-item" + i}
                                onClick={() => console.log("test")}
                                active={i === 0}
                            >
                                List Item {i + 1}
                            </MagnetListItem>
                        );
                    })}
                </MagnetList>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Clickable = ClickableTemplate.bind({});
Clickable.args = {
    showDividers: false,
    theme: "auto"
} as IListProps;

const ColorsTemplate: ComponentStory<typeof MagnetList> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetList {...args}>
                    <MagnetListItem
                        color="primary"
                        onClick={() => console.log("test")}
                    >
                        List Item Primary
                    </MagnetListItem>
                    <MagnetListItem
                        color="secondary"
                        onClick={() => console.log("test")}
                    >
                        List Item Secondary
                    </MagnetListItem>
                    <MagnetListItem
                        color="success"
                        onClick={() => console.log("test")}
                    >
                        List Item Success
                    </MagnetListItem>
                    <MagnetListItem
                        color="warning"
                        onClick={() => console.log("test")}
                    >
                        List Item Warning
                    </MagnetListItem>
                    <MagnetListItem
                        color="error"
                        onClick={() => console.log("test")}
                    >
                        List Item Error
                    </MagnetListItem>
                    {Array.apply(null, Array(100)).map((_, i) => {
                        return (
                            <MagnetListItem
                                key={"list-item" + i}
                                onClick={() => console.log("test")}
                            >
                                List Item {i + 6}
                            </MagnetListItem>
                        );
                    })}
                </MagnetList>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Colors = ColorsTemplate.bind({});
Colors.args = {
    showDividers: false,
    theme: "auto"
} as IListProps;

const IconsTemplate: ComponentStory<typeof MagnetList> = (args) => {
    return (
        <MagnetMain>
            <MagnetContainer fluid>
                <MagnetList {...args}>
                    <MagnetListItem
                        active
                        appendIcon="house"
                        prependIcon="house"
                        onClick={() => console.log("test")}
                    >
                        List Item Primary
                    </MagnetListItem>
                    <MagnetListItem
                        prependIcon="house"
                        onClick={() => console.log("test")}
                    >
                        List Item Secondary
                    </MagnetListItem>
                    <MagnetListItem
                        prependIcon="house"
                        onClick={() => console.log("test")}
                    >
                        List Item
                    </MagnetListItem>
                    <MagnetListItem
                        prependIcon="house"
                        onClick={() => console.log("test")}
                    >
                        List Item
                    </MagnetListItem>
                    <MagnetListItem
                        prependIcon="house"
                        onClick={() => console.log("test")}
                    >
                        List Item
                    </MagnetListItem>
                </MagnetList>
            </MagnetContainer>
        </MagnetMain>
    );
};

export const Icons = IconsTemplate.bind({});
Icons.args = {
    showDividers: false,
    theme: "auto"
} as IListProps;
