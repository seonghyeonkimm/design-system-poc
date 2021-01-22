import '../styles/index.css';
import { addDecorator } from '@storybook/react';
import ThemeToggler from './ThemeToggler';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const StoryContainer = ({ children }) => {
  return (
    <div className="relative pt-14 px-16 bg-gray-0 dark:bg-dark-gray-0 min-w-max min-h-screen">
      <div className="absolute top-4 right-16">
        <ThemeToggler />
      </div>
      {children}
    </div>
  )
}

addDecorator(story => (
  <StoryContainer>{story()}</StoryContainer>
))
