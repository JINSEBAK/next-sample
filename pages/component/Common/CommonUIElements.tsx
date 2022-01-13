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

// Container --------------------------------------------------
interface ChildrenProps {
  children?: JSX.Element | JSX.Element[];
}
export const MainContainer = ({ children }: ChildrenProps) => {
  return <>{children}</>;
};

export const Contents = ({ children }: ChildrenProps) => {
  return (
    <div id="container" className="ptr--top">
      {children}
    </div>
  );
};
