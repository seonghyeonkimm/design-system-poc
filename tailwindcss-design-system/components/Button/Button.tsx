import * as React from 'react';

export type ButtonProps = {
  color?: 'primary' | 'secondary' | 'error';
  size?: 'large' | 'medium' | 'small';
  ghost?: boolean;
  disabled?: boolean;
  className?: string;
} & JSX.IntrinsicElements['button'];
const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  size = 'medium',
  ghost = false,
  disabled = false,
  children,
  className,
  ...props
}) => {
  const btnClassName = getClassName({
    color,
    size,
    ghost,
    disabled,
    className,
  });

  return (
    <button
      {...props}
      disabled={disabled}
      className={btnClassName}
    >
      {children}
    </button>
  );
};

const getClassName = (options: Omit<ButtonProps, 'children'>) => {
  const { color, size, ghost, disabled, className } = options;
  const borderWidth = size === 'small' ? 'border' : 'border-2';
  const classNames = [borderWidth, 'rounded-full', 'focus:outline-none' ,'focus:ring'];

  if (className) {
    classNames.push(className);
  }

  switch (size) {
    case 'large':
      classNames.push('p-3');
    case 'medium':
      classNames.push('p-2');
    case 'small':
      classNames.push('p-1')
  }

  if (disabled) {
    !ghost && classNames.push('bg-gray-2');
    classNames.push('border-color-gray-2')
    classNames.push('text-text-tertiary');
  } else {
    const textColor = ghost
      ? color === 'primary' ? 'text-primary'
      : color === 'secondary' ? 'text-secondary'
      : 'text-system-error' : 'text-gray-0';
    const bgColor = ghost ? 'bg-gray-0'
      : color === 'primary' ? 'bg-primary'
      : color === 'secondary' ? 'bg-secondary' : 'bg-system-error';
    const borderColor = color === 'primary' ? 'border-color-primary'
      : color === 'secondary' ? 'border-color-secondary' : 'border-color-system-error';
    const pressedTextColor = ghost
      ? color === 'primary' ? 'text-primary-down'
      : color === 'secondary' ? 'text-secondary-down'
      : 'text-system-error-down' : 'text-gray-0';
    const pressedBgColor = ghost ? 'bg-gray-0'
      : color === 'primary' ? 'bg-primary-down'
      : color === 'secondary' ? 'bg-secondary-down' : 'bg-system-error-down';
    const pressedBorderColor = color === 'primary' ? 'border-color-primary-down'
      : color === 'secondary' ? 'border-color-secondary-down' : 'border-color-system-error-down';

    classNames.push(textColor);
    classNames.push(bgColor);
    classNames.push(borderColor);

    classNames.push(`focus:${pressedTextColor}`)
    classNames.push(`active:${pressedTextColor}`)

    classNames.push(`focus:${pressedBgColor}`)
    classNames.push(`active:${pressedBgColor}`)

    classNames.push(`focus:${pressedBorderColor}`)
    classNames.push(`active:${pressedBorderColor}`)

    classNames.push('focus:text-opacity-70')
    classNames.push('active:text-opacity-70')
  }

  return classNames.join(' ');
}

export default Button;
