import * as React from 'react';
import { Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    className: {
      defaultValue: 'w-full',
    },
  },
} as Meta;

export const Default = (args: ButtonProps) => {
  return (
    <div className="mt-6 w-3/12">
      <Button {...args}>Button</Button>
    </div>
  )
};
