// Log 단건에 대한 컴포넌트
import {
  LogContainer,
  LogHeader,
  LogMedia,
  LogInfo,
  LogContents,
} from "./LogElements";
import { useState } from "react";

const Log = () => {
  const [isExpand, setIsExpand] = useState(false);

  // 가족 정보 확장-축소
  const onClickExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <LogContainer>
      <LogHeader isExpand={isExpand} onClickExpand={onClickExpand} />
      <LogMedia />
      <LogInfo />
      <LogContents />
    </LogContainer>
  );
};

export default Log;
