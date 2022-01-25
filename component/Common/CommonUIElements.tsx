import Link from "next/link";
import { Button, Icon } from "./BasicUIElements";
import classNames from "classnames";

// Container --------------------------------------------------
interface ChildrenProps {
  children?: JSX.Element | JSX.Element[];
}

interface ContainerProps {
  type?: string;
  className?: string;
  children: JSX.Element | JSX.Element[];
}
export const MainContainer = ({ children }: ChildrenProps) => {
  return <>{children}</>;
};

export const Contents = ({ className, children }: ContainerProps) => {
  return (
    <div id="container" className={className}>
      {children}
    </div>
  );
};

export const ContentsInner = ({
  type,
  className,
  children,
}: ContainerProps) => {
  return (
    <>
      {type === "div" ? (
        <div className={className}>{children}</div>
      ) : (
        <section className={className}>{children}</section>
      )}
    </>
  );
};

// 복합 요소 --------------------------------------------------
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

// Tabs
interface TabsProps {
  menu: {};
  activeTab: number;
  onClickTab: (index: number) => void;
}
export const Tabs = ({ menu, activeTab, onClickTab }: TabsProps) => {
  return (
    <div className="s_tabs">
      <ul className="line_tabs">
        {Object.keys(menu).map((item, index) => {
          return (
            <li
              key={index}
              className={classNames(
                "tab_item",
                activeTab === index && "is_active"
              )}
              onClick={() => onClickTab(index)}
            >
              <a>{menu[item]}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
