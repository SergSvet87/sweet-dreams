import { FC, MouseEventHandler } from 'react';
import style from './button.module.css';

interface IButton {
  margin?: string;
  padding?: string;
  fontSize?: string;
  color?: string;
  background?: string;
  border?: string;
  width?: string;
  height?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<IButton> = ({
  children,
  type = 'button',
  onClick,
  fontSize,
  border,
  color,
  margin,
  padding,
  width,
  height,
  background,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ fontSize, border, color, background, margin, width, height, padding }}
      type={type}
      className={style.button}
    >
      {children}
    </button>
  );
};
export default Button;
