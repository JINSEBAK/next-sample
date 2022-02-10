import { useEffect } from "react";
import { useRouter } from "next/router";

const IndexPage = () => {
  //
  const router = useRouter();

  useEffect(() => {
    // 3초 후 홈 화면으로 이동
    setTimeout(() => {
      router.push("/home");
    }, 3000);
  }, []);

  return (
    <div>
      <img
        src="/images/index.jpeg"
        alt="Mollys Pet Shop"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

export default IndexPage;
