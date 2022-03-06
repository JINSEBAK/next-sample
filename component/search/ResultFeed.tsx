import { useLayoutEffect, useRef } from "react";

const ResultFeed = ({ id, imgUrl, isCenter }) => {
  //
  const feedRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (feedRef.current) {
      if (isCenter) {
        console.log(feedRef.current.getBoundingClientRect());
        feedRef.current.scrollIntoView({ block: "center" });
      }
    }
  }, [feedRef, isCenter]);

  return (
    <div
      id={id}
      ref={feedRef}
      style={{
        border: "1px solid #ddd",
        paddingTop: "30px",
        margin: "40px auto 60px",
        height: "500px",
        textAlign: "center",
      }}
    >
      <img
        src={imgUrl}
        alt="이미지"
        style={{
          width: "300px",
          height: "300px",
        }}
      />
    </div>
  );
};

export default ResultFeed;
