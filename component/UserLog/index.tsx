// Log 단건에 대한 컴포넌트
import {
  LogContainer,
  LogTitle,
  LogMedia,
  // LogInfo,
  LogContents,
} from "./LogElements";
import { useState } from "react";
import Router from "next/router";

const Log = ({ userInfo, media, logInfo, alignType }) => {
  const [isExpand, setIsExpand] = useState(false);

  // 가족 정보 확장-축소
  const onClickExpand = () => {
    // 1회 확장 후 접을 수 없음 (확장 후 클릭 시 화면 이동)
    if (!isExpand) {
      setIsExpand(true);
    }
  };

  return (
    <LogContainer>
      <LogTitle
        isExpand={isExpand}
        onClickExpand={onClickExpand}
        userInfo={userInfo}
        logInfo={logInfo}
      />
      <LogMedia media={media} alignType={alignType} />
      <LogContents Router={Router} />
    </LogContainer>
  );
};

export default Log;
