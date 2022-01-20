import classNames from "classnames";

// BUTTON
interface ButtonProps {
  className?: string;
  content?: string;
  children?: JSX.Element | JSX.Element[] | string;
  ref?: any;
  onClick?: (e) => void;
  onDoubleClick?: () => void;
}

export const Button = ({
  className,
  content,
  children,
  onClick,
  onDoubleClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {content}
      {children}
    </button>
  );
};

// ICON
interface IconProps {
  name?: string;
  active?: boolean;
  onClickHandler?: () => void;
}

export const Icon = ({ name, active, onClickHandler }: IconProps) => {
  return (
    <span
      className={classNames("icon", name, active && "on")}
      onClick={onClickHandler}
    />
  );
};
