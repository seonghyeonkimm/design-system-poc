import * as React from 'react';

export type ButtonProps = {};
const Button: React.FC = ({ children }) => {
  return <button className="text-gray-500">{children}</button>;
};

export default Button;
