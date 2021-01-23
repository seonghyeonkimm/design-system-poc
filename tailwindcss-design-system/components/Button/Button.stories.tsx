import * as React from 'react';
import { Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Default = () => {

  return (
    <div className="mt-6">
      <div className="grid grid-cols-4 gap-4">
        <ButtonSection title="Primary" />
        <ButtonSection title="Secondary" color="secondary" />
        <ButtonSection title="Error" color="error" />
        <ButtonSection title="Disabled" disabled />
        <ButtonSection title="Primary/Ghost" ghost />
        <ButtonSection title="Secondary/Ghost" color="secondary" ghost />
        <ButtonSection title="Error/Ghost" color="error" ghost />
        <ButtonSection title="Disabled/Ghost" disabled ghost />
      </div>
    </div>
  )
};

const ButtonSection: React.FC<{ title: string } & ButtonProps> = ({ title, ...buttonProps }) => {
  return (
    <div className="mb-2">
      <h1 className="font-bold text-h6 mb-1 text-gray-10">{title}</h1>
      <div className="grid grid-cols-1 gap-2">
        <Button className="w-full" size="large" {...buttonProps}>Large Button</Button>
        <Button className="w-full" {...buttonProps}>Medium Button</Button>
        <Button className="w-full" size="small" {...buttonProps}>Small Button</Button>
      </div>
    </div>
  )
}