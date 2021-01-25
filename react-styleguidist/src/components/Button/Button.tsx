import * as React from 'react';

type ButtonProps = JSX.IntrinsicElements["button"] & {
  /**
   * button text and background color variant
   */
  color?: "primary" | "secondary" | "error";
  /**
   * button size
   */
  size?: "large" | "medium" | "small";
  /**
   * whether to use button as ghost or not
   */
  ghost?: boolean;
  /**
   * button disabled
   */
  disabled?: boolean;
  /**
   * more className to be added
   */
  className?: string;
};

/**
 * Button Component
 * @author [seonghyeonkimm__](https://github.com/seonghyeonkimm)
 */
const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>
};

export default Button;
