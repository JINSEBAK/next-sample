import Document, { Html, Head, Main, NextScript } from "next/document";

// _app 다음에 실행
// head, body 태그 내에 들어갈 내용을 커스텀
// WEB FONT import, charset, 웹 접근성 관련 태그 지정

function Documents() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Documents;
