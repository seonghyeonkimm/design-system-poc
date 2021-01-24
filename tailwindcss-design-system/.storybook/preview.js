import '../styles/index.css';
import { addDecorator } from '@storybook/react';
import ThemeToggler from './ThemeToggler';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const StoryContainer = ({ children }) => {
  return (
    <div className="relative pt-2 px-2 bg-gray-0 min-w-max">
      <div className="absolute top-2 right-2">
        <ThemeToggler />
      </div>
      {children}
    </div>
  )
}

addDecorator(story => (
  <StoryContainer>{story()}</StoryContainer>
))
