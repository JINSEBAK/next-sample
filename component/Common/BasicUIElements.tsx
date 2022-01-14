interface ButtonProps {
  className?: string;
  content?: string;
  children?: JSX.Element | JSX.Element[];
  onClick?: () => void;
}

export const Button = ({
  className,
  content,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button type="button" className={className} onClick={onClick && onClick}>
      {content}
      {children}
    </button>
  );
};

interface IconProps {
  name: string;
}
