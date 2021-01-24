import * as React from 'react';
import { Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  className: 'w-3/12',
};
