import { useEffect, useState, Fragment, useLayoutEffect } from "react";

import { useRouter } from "next/router";
import { userAgent, scrollEvent } from "../lib/utils";
import Head from "next/head";
import classNames from "classnames";

// TransitionGroup 자식 컴포넌트 삽입과 동시에 기존 컴포넌트 제거
// SwitchTransition in-out에 따라 설정 가능

import {
  TransitionGroup,
  SwitchTransition,
  CSSTransition,
} from "react-transition-group";
import { getCookieParser } from "next/dist/server/api-utils";

const TIMEOUT = 500;
const getTransitionStyles = {
  entering: {
    // position: `absolute`,
    // opacity: 1,
    // transform: `translateX(50px)`,
    transform: "translate3d(100%,0,0)",
    position: "absolute",
    zIndex: "10000",
    background: "pink",
  },
  entered: {
    // transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    // opacity: 1,
    // transform: `translateX(0px)`,
    transform: "translate3d(0,0,0)",
    transition: "all 300ms ease-in-out",
  },
  exiting: {
    // transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    // opacity: 1,
    // transform: `translateX(-50px)`,
    transform: "translate3d(0,0,0)",
  },
  exited: {
    opacity: 1,
    transform: "translate3d(100%,0,0)",
    //transition: "all 600ms",
  },
};

declare global {
  interface Window {
    mollys: any;
    webkit?: any;
  }
}

const pageTrans = "trans toRight";
const classname = {
  appear: `${pageTrans} appear`,
  appearActive: `${pageTrans} appear active`,
  appearDone: `${pageTrans} appear done`,
  enter: `${pageTrans} enter`,
  enterActive: `${pageTrans} enter active`,
  enterDone: `${pageTrans} enter done`,
  exit: `${pageTrans} exit`,
  exitActive: `${pageTrans} exit active`,
  exitDone: `${pageTrans} exit done`,
};

function Layout({ children }) {
  const router = useRouter();
  const [browser, setBrowser] = useState();
  const [mode, setMode] = useState("in-out");

  useEffect(() => {
    // Cookie 정보 가져오기
    getCookie();

    userAgent();
    scrollEvent();
  }, []);

  const getCookie = () => {
    //
    console.log("쿠키 가져오기");
    const cookie = document.cookie.split(";");
    console.log(cookie);
  };

  return (
    <Fragment>
      <Head>
        <title>MOLLY'S</title>
        <meta
          http-equiv="content-type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover, minimal-ui"
        />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      {/* <TransitionGroup>{children}</TransitionGroup> */}
      <SwitchTransition mode={mode}>
        <CSSTransition
          key={router.pathname}
          timeout={200}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          className="slide"
        >
          {children}
        </CSSTransition>
      </SwitchTransition>
      {/* <TransitionGroup>
        <CSSTransition
          key={router.pathname}
          timeout={200}
          className={classname}
        >
          {children}
        </CSSTransition>
      </TransitionGroup> */}
    </Fragment>
  );
}

export default Layout;
