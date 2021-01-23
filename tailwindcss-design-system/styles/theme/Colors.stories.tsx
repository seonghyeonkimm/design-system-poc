import React from "react";
import { Meta } from "@storybook/react/types-6-0";


export default {
  title: "Theme/Colors",
} as Meta;


export const Colors = () => {
  return (
    <div>
      <ColorSection
        title="Primary Color"
        colors={[
          'bg-primary',
          'bg-primary-elevate',
          'bg-primary-down',
        ]}
      />
      <ColorSection
        title="Secondary Color"
        colors={[
          'bg-secondary',
          'bg-secondary-elevate',
          'bg-secondary-down',
        ]}
      />
      <ColorSection
        title="Tertiary"
        colors={[
          'bg-tertiary',
        ]}
      />
      <ColorSection
        title="Gray Color"
        colors={[
          'bg-gray-10',
          'bg-gray-9',
          'bg-gray-8',
          'bg-gray-7',
          'bg-gray-6',
          'bg-gray-5',
          'bg-gray-4',
          'bg-gray-3',
          'bg-gray-2',
          'bg-gray-1',
          'bg-gray-0',
        ]}
      />
      <ColorSection
        title="Sub Color"
        colors={[
          'bg-turquoise',
          'bg-mint',
          'bg-orange',
          'bg-green',
          'bg-red',
          'bg-electric-blue',
          'bg-baby-blue',
          'bg-lemon',
          'bg-pink',
          'bg-light-mint',
          'bg-light-blue',
          'bg-peach',
        ]}
      />
    </div>
  )
};

const ColorSection: React.FC<{ title: string; colors: string[] }> = ({ title, colors }) => {
  return (
    <div className="pb-2">
      <h1 className="text-lg font-bold text-gray-10">
        {title}
      </h1>
      <div className="grid grid-cols-5 gap-4">
        {colors.map((color) => {
          return (
            <ColorBox
              key={color}
              name={color.replace('bg-', '')}
              className={color}
            />
          )
        })} </div>
    </div>
  );
}

const ColorBox: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  return (
    <div>
      <p className="mb-2 text-gray-10">{name}</p>
      <div className={[className, 'h-10 rounded-md shadow-xl'].join(' ')} />
    </div>
  )
}
