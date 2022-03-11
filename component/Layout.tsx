import { useEffect, useState, Fragment, useLayoutEffect } from "react";
import {
  Transition,
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";
import { useRouter } from "next/router";
import { userAgent, scrollEvent } from "../lib/utils";
import Head from "next/head";
import classNames from "classnames";

const TIMEOUT = 200;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 1,
    transform: `translateX(50px)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `translateX(0px)`,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `translateX(-50px)`,
  },
};

declare global {
  interface Window {
    mollys: any;
    webkit?: any;
  }
}

function Layout({ children }) {
  const router = useRouter();
  const [browser, setBrowser] = useState();

  useEffect(() => {
    userAgent();
    scrollEvent();
  }, []);

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
      <article className={classNames(router.pathname === "/home" && "pullto")}>
        {/* {children} */}
        <TransitionGroup style={{ position: "relative" }}>
          <Transition key={router.pathname} timeout={100}>
            {children}
            {/* {(status) => (
              <div
                style={{ ...getTransitionStyles[status] }}
                className="container"
              >
                {children}
              </div>
            )} */}
          </Transition>
        </TransitionGroup>
      </article>
    </Fragment>
  );
}

export default Layout;
