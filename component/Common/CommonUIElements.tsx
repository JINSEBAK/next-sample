import Link from "next/link";
import { Button, Icon } from "./BasicUIElements";
import classNames from "classnames";
import { Transition, CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";
import { useState } from "react";

// Container --------------------------------------------------
interface ChildrenProps {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

interface ContainerProps {
  type?: string;
  className?: string;
  children: JSX.Element | JSX.Element[];
}
export const MainContainer = ({ children }: ChildrenProps) => {
  const router = useRouter();
  return (
    <article className={classNames(router.pathname === "/home" && "pullto")}>
      {children}
    </article>
  );
};

export const TransitionContainer2 = ({ children }: ChildrenProps) => {
  const router = useRouter();
  return (
    <Transition
      key={router.pathname}
      timeout={200}
      in={true}
      mountOnEnter={true}
      unmountOnExit={true} // 종료 후 언마운드 default: false
      appear
    >
      {(status) => {
        return (
          <article className={classNames(`page page-${status}`)}>
            {children}
          </article>
        );
      }}
    </Transition>
  );
};

export const TransitionContainer = ({ children }: ChildrenProps) => {
  return <article>{children}</article>;
};

export const SlideContainer = () => {};

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
      <ul className="line_tabs xscroll_list">
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
