// 모든 페이지 공통으로 사용하는 파일들을 import
/**
 * _app.tsx
 * 모든 페이지 컴포넌트를 감싸고 있는 공통 레이아웃
 * 가장 최초로 실행됨
 *
 * Nextjs + styled-component 조합으로 사용 시 첫 로딩은 문제없으나, 이후 새로고침 시 className 오류 발생
 * => SSR -> CSR이 되면서 처음 서버에서 받은 hash+클래스명이 이후 클라이언트에서 받은 hash+클래스명이 달라서 발생
 * => 바벨 설정 변경으로 해결 할 수 있음 (babel-plugin-styled-components 설치 후 .babelrc 생성)

 *  */

/**
 * 모든 페이지에서 적용되는 CSS
 * 각 컴포넌트별로 CSS 생성하고 싶을 때는 [name].module.css
 */
import "../styles/globals.css";

// CSS import
import "../styles/reset.css";
// import "../styles/font.css";
// import "../styles/common.css";
import "../styles/style.css";

import Layout from "./component/Layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log(pageProps);
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
