import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";


export default {
  title: "Theme/Spacing",
} as Meta;


export const Spacing = () => {
  return (
    <div className="mt-8">
      <div className="flex items-end">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <SpacingItem key={index} level={index + 1} />
          )
        })}
      </div>
    </div>
  )
};

const SpacingItem: React.FC<{ level: number; }>  = ({ level }) => {
  return (
    <div className="flex-auto">
      <div className={`w-${level} h-${level} bg-gray-4 inline-block`} />
      <p className="text-gray-10">Level {level}</p>
    </div>
  );
}

