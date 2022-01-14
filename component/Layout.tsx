import { useEffect, useState, Fragment } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import { useRouter } from "next/router";
import { userAgent, scrollEvent } from "../lib/utils";
import Navigation from "./Common/Navigation";

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
  const [browser, setBrowser] = useState();

  useEffect(() => {
    userAgent();
    scrollEvent();
  }, []);

  return (
    <Fragment>
      <article className="pullto">
        {/* <Header bgColor={""} /> */}
        {children}
        {/* <TransitionGroup style={{ position: "relative" }}>
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
      </TransitionGroup> */}
      </article>
    </Fragment>
  );
}

export default Layout;
