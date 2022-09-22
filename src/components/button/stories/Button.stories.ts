import { Story, Meta } from "@storybook/html";
import "..";

export default {
    title: "Example/Button",
    argTypes: {}
} as Meta;

const Template: Story = (args) => {
    return `<magnet-button>test</magnet-button>`;
};

export const Default = Template.bind({});
Default.args = {};
