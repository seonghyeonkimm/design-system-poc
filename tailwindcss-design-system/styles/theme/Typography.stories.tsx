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
          {Array.from({ length: 7 }).map((_, index) => {
            return (
              <div className="mb-1" key={index}>
                <Heading level={index + 1} />
              </div>
            )
          })}
        </div>
        <div className="flex-auto">
          <h1 className="font-bold text-h1 text-gray-10">Body</h1>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <div className="mb-1" key={index}>
                <Body level={index + 1} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

const Heading: React.FC<{ level: number }> = ({ level }) => {
  return <h1 className={`font-bold text-h${level} text-gray-10`}>제목 {level}</h1>
}

const Body: React.FC<{ level: number }> = ({ level }) => {
  return (
    <>
      <p className={`text-body${level} font-bold text-gray-10`}>본문 볼드 {level}</p>
      <p className={`text-body${level} text-gray-10`}>본문 {level}</p>
    </>

  )
}
