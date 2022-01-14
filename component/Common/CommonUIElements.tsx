import Link from "next/link";
import { Button } from "./BasicUIElements";
import Icon from "../Icon";

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
