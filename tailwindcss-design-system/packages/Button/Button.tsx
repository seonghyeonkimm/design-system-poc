import * as React from 'react';

export type ButtonProps = {};
const Button: React.FC = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
