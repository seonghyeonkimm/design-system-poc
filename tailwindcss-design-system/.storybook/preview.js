import '../styles/index.css';
import { addDecorator } from '@storybook/react';
import ThemeToggler from './ThemeToggler';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const StoryContainer = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0">
        <ThemeToggler />
      </div>
      {children}
    </div>
  )
}

addDecorator(story => (
  <StoryContainer>{story()}</StoryContainer>
))
