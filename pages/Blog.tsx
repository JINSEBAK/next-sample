import styles from "../styles/About.module.css";
import Button from "./component/Button";
import { InferGetStaticPropsType } from "next";

type Post = {
  author: string;
  title: string;
};

function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const onClickHandle = () => {
    console.log("button click");
  };

  return (
    <div>
      <h3 className={styles.welcome}>About</h3>
      <Button primary onClick={onClickHandle}>
        포스트 보기
      </Button>
      <ul>
        {posts.map((post) => {
          <li>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

/** Nextjs는 모든 페이지를 pre-rendering (클라이언트에서 js 작업하기 전에 미리 html을 만들어둠) => SEO에 더 나은 퍼포먼스 제공
 * ----> 브라우저에서 javascript disabled하고 화면 확인 시 정적 html만 표기됨
 * => SSG(Static Site Generation): getStaticProps (build시 html 만들어두고, request 발생하면 재사용)
 * => SSR(Server Side Rendering): getServerSideProps (전통적인 SSR방식으로 request시에 html 만들어짐) - 페이지 렌더링 전에 서버로 부터 받아야되는 정보가 있는 경우 사용 (ex, 데이터가 실시간으로 변경되는 경우 등)
 * nextjs에서는 조금 더 나은 성능을 위해 SSG를 추천하고 있음
 * nextjs에서는 각각의 페이지에 대해 어떤 종류로 pre-rendering할 지 선택할 수 있음
 */

// 빌드 시에 실행되어서 데이터를 가지고 있는 상태..
// async: 비동기 함수를 동기식으로 사용하겠다!
export const getStaticProps = async () => {
  const res = await fetch("api url");
  const posts = await res.json();
  // api url을 호출해서 조회한 데이터를 posts에 담아서 Blog 컴포넌트에 props로 넘김
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
