import classNames from "classnames";

// BUTTON
interface ButtonProps {
  className?: string;
  content?: string;
  children?: JSX.Element | JSX.Element[] | string;
  ref?: any;
  disabled?: boolean;
  onClick?: (e) => void;
  onDoubleClick?: () => void;
}

export const Button = ({
  className,
  content,
  children,
  onClick,
  onDoubleClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      disabled={disabled}
    >
      {content && <span>{content}</span>}
      {children}
    </button>
  );
};

// ICON
interface IconProps {
  name?: string;
  active?: boolean;
  title?: string;
  onClickHandler?: () => void;
}

export const Icon = ({ name, active, title, onClickHandler }: IconProps) => {
  return (
    <span
      className={classNames("icon", name, active && "on")}
      onClick={onClickHandler}
    >
      {title && <span className="sr">{title}</span>}
    </span>
  );
};
