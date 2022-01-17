import Link from "next/link";
import { Button, Icon } from "./BasicUIElements";

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

// 아이콘 + 텍스트
interface IconTextBoxProps {
  name: string;
  active?: boolean;
  content?: number | string;
  link?: string;
  onClickHandler?: () => void;
}
export const IconTextBox = ({
  name,
  active,
  content,
  link,
  onClickHandler,
}: IconTextBoxProps) => {
  return (
    <div className="icon-txt-box" onClick={onClickHandler}>
      <div className="icon-txt-inner">
        <Icon name={name} active={active} />
        {/* content && 사용시 0이 넘어오면 span을 못 그림 */}
        {content !== null && content !== undefined && (
          <>
            {link ? (
              <Link href={link}>
                <a>{content}</a>
              </Link>
            ) : (
              <span>{content}</span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// Toast popup
interface ToastProps {
  message: string;
}
export const Toast = ({ message }) => {
  return (
    <div className="fot_toast_box">
      <p>{message}</p>
    </div>
  );
};
