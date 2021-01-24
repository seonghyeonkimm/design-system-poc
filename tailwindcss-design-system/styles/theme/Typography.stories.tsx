import * as React from "react";
import { Meta } from "@storybook/react/types-6-0";


export default {
  title: "Theme/Typography",
} as Meta;


export const Typography = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-auto">
          <h1 className="font-bold text-h1 text-gray-10">Headings</h1>
          <Heading level={1} className="text-h1" />
          <Heading level={2} className="text-h2" />
          <Heading level={3} className="text-h3" />
          <Heading level={4} className="text-h4" />
          <Heading level={5} className="text-h5" />
          <Heading level={6} className="text-h6" />
          <Heading level={7} className="text-h7" />
        </div>
        <div className="flex-auto">
          <h1 className="font-bold text-h1 text-gray-10">Body</h1>
          <Body level={1} className="text-body1" />
          <Body level={2} className="text-body2" />
          <Body level={3} className="text-body3" />
          <Body level={4} className="text-body4" />
          <Body level={5} className="text-body5" />
        </div>
      </div>
    </div>
  )
};

const Heading: React.FC<{ className: string; level: number }> = ({ className, level }) => {
  return (
    <div className="mb-1">
      <h1 className={`${className} font-bold text-gray-10`}>제목 {level}</h1>
    </div>
  )
}

const Body: React.FC<{ level: number; className }> = ({ level, className }) => {
  return (
    <div className="mb-1">
      <p className={`${className} font-bold text-gray-10`}>본문 볼드 {level}</p>
      <p className={`${className} text-gray-10`}>본문 {level}</p>
    </div>

  )
}
