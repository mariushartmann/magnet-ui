// system imports
import { ComponentMeta, ComponentStory } from "@storybook/react";

// internal imports

// component imports
import { MagnetButton, IButtonProps } from "..";

export default {
  title: "Buttons",
  component: MagnetButton,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
    onClick: { action: "onClick" },
  },
} as ComponentMeta<typeof MagnetButton>;

const DefaultTemplate: ComponentStory<typeof MagnetButton> = (args) => (
  <div>
    <MagnetButton {...args}>Button</MagnetButton>
  </div>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  appendIcon: undefined,
  block: false,
  color: "primary",
  disabled: false,
  href: undefined,
  icon: false,
  loading: false,
  onClick: undefined,
  prependIcon: undefined,
  small: false,
  theme: "auto",
  variant: "elevated",
} as IButtonProps;
