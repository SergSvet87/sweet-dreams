import { FC, MouseEventHandler } from 'react';
import style from './button.module.css';

interface IButton {
  margin?: string;
  fontSize?: string;
  color?: string;
  background?: string;
  border?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>
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
  background,
}) => {
  return (
    <button onClick={onClick} style={{ fontSize, border, color, background, margin }} type={type} className={style.button}>
      {children}
    </button>
  );
};
export default Button;
