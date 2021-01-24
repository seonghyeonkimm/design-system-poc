import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";


export default {
  title: "Theme/Spacing",
} as Meta;


export const Spacing = () => {
  return (
    <div className="mt-8">
      <div className="flex items-end">
        <SpacingItem level={1} className="w-1 h-2" />
        <SpacingItem level={2} className="w-2 h-2" />
        <SpacingItem level={3} className="w-3 h-3" />
        <SpacingItem level={4} className="w-4 h-4" />
        <SpacingItem level={5} className="w-5 h-5" />
        <SpacingItem level={6} className="w-6 h-6" />
        <SpacingItem level={7} className="w-7 h-7" />
        <SpacingItem level={8} className="w-8 h-8" />
        <SpacingItem level={9} className="w-9 h-9" />
        <SpacingItem level={10} className="w-10 h-10" />
      </div>
    </div>
  )
};

const SpacingItem: React.FC<{ className: string; level: number; }>  = ({ className, level }) => {
  return (
    <div className="flex-auto">
      <div className={`${className} bg-gray-4 inline-block`} />
      <p className="text-gray-10">Level {level}</p>
    </div>
  );
}

