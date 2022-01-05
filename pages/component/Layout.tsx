import { useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import { useEffect, Fragment } from "react";
import { Transition, TransitionGroup } from "react-transition-group";

import { useRouter } from "next/router";

const TIMEOUT = 200;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transform: `translateX(50px)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `translateX(0px)`,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
    transform: `translateX(-50px)`,
  },
};

function Layout({ children }) {
  const router = useRouter();
  return (
    <Fragment>
      <Header bgColor={""} />
      <TransitionGroup style={{ position: "relative" }}>
        <Transition key={router.pathname} timeout={500}>
          {(status) => (
            <div
              style={{ ...getTransitionStyles[status] }}
              className="container"
            >
              {children}
            </div>
          )}
        </Transition>
      </TransitionGroup>
      <Navigation />
    </Fragment>
  );
}

export default Layout;
