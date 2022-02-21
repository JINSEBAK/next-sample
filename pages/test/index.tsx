import {
  MainContainer,
  Contents,
} from "../../component/Common/CommonUIElements";
import SubHeader from "../../component/Common/SubHeader";
import { useState, useEffect } from "react";
import { Button } from "../../component/Common/BasicUIElements";
import { isMobile } from "../../lib/common";

const titleStyle = {
  fontWeight: "bold",
  fontSize: "14px",
  padding: "0 16px",
};
const btnStyle = {
  margin: "0 8px 4px 0",
};

const NativeWebTestPage = () => {
  const [log, setLog] = useState("console.log...");
  const os = isMobile.Android ? "AOS" : "iOS";

  useEffect(() => {
    window.addEventListener("updateCurrentLocation", async (msg: any) => {
      console.log(msg.detail);
    });

    // AOS 뒤로가기
    window.addEventListener("back", async () => {
      console.log("back");
      history.back();
    });

    // 이벤트 리스너 제거 하지 않으면 2번째 실행 시부터 오류
    // 'event' has already been declared..
    return () => {
      window.removeEventListener(
        "updateCurrentLocation",
        async (msg: any) => {}
      );
      window.removeEventListener("back", async (msg: any) => {});
    };
  }, []);

  // 위치 정보 조회
  const onClickCurrentLocation = () => {
    let txt = `${os}|위치정보 조회 클릭\n`;
    onTypingLog(txt);
    if (isMobile.Android()) {
      window.mollys.getCurrentLocation();
    } else if (isMobile.iOS()) {
      window.webkit?.messsageHandlers.openBrowser.getCurrentLocation({});
    }
  };

  // Toast 팝업 요청
  const onClickShowToast = (e: MouseEvent) => {
    let txt = `${os}|Toast 팝업 요청 클릭\n`;
    let dataMap = new Map();
    dataMap.set("message", "이삭토스트 주문합니다.");
    console.log(dataMap);
    onTypingLog(txt, dataMap);

    if (isMobile.Android()) {
      window.mollys.showToast(dataMap);
    } else if (isMobile.iOS()) {
      window.webkit?.messsageHandlers.openBrowser.showToast({ dataMap });
    }
  };

  // 브라우저 연동
  const onClickOpenBrowser = (e: MouseEvent) => {
    let txt = `${os}|브라우저 연동 클릭\n`;
    let dataMap = new Map<any, any>();
    dataMap.set("url", "https://naver.com");
    onTypingLog(txt, dataMap);

    if (isMobile.Android()) {
      window.mollys.openBrowser(dataMap);
    } else if (isMobile.iOS()) {
      window.webkit?.messsageHandlers.openBrowser.postMessage({ dataMap });
    }
  };

  // 데이터 초기화
  const onClickInitData = () => {
    let txt = `${os}|데이터 초기화\n`;
    onTypingLog(txt);
    if (isMobile.Android()) {
      window.mollys.finish();
    } else if (isMobile.iOS()) {
      window.webkit?.messageHandlers.initData.postMessage({});
    }
  };

  // 화면 종료
  const onClickScreenClose = () => {
    let txt = `${os}|화면종료 클릭\n`;
    onTypingLog(txt);
    if (isMobile.Android()) {
      window.mollys.finish();
    } else if (isMobile.iOS()) {
      window.webkit?.messageHandlers.close.postMessage({});
    }
  };

  // 앱 종료
  const onClickFinish = () => {
    let txt = `${os}|앱 종료 클릭\n`;
    onTypingLog(txt);
    if (isMobile.Android()) {
      window.mollys.finish();
    } else if (isMobile.iOS()) {
      window.webkit?.messageHandlers.finish.postMessage({});
    }
  };

  // 콘솔에 텍스트 입력
  const onTypingLog = (txt: string, map?: any) => {
    if (map) {
      map.forEach((value, key, map) => {
        txt += `\n파라미터\n`;
        txt += `${key}: ${value}\n`;
      });
    }
    setLog(txt);
  };

  return (
    <MainContainer>
      <SubHeader title="연동테스트" isBack={true} />
      <Contents>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5 style={titleStyle}>Web to App</h5>
          <div style={{ padding: "10px" }}>
            <Button
              className="btn_line_mint"
              content="푸시아이디 조회"
              style={btnStyle}
            />
            <Button
              className="btn_line_mint"
              content="인증토큰 조회"
              style={btnStyle}
            />
            <Button
              className="btn_line_mint"
              content="로그인 요청"
              style={btnStyle}
            />
            <Button
              className="btn_line_mint"
              content="위치정보 조회"
              style={btnStyle}
              onClick={onClickCurrentLocation}
            />
            <Button
              className="btn_line_mint"
              content="Toast 팝업 요청"
              style={btnStyle}
              onClick={onClickShowToast}
            />
            <Button
              className="btn_line_mint"
              content="업로드 화면 이동"
              style={btnStyle}
            />
            <Button
              className="btn_line_mint"
              content="업로드 > 친구선택"
              style={btnStyle}
            />
            <Button
              className="btn_line_mint"
              content="업로드 > 상품선택"
              style={btnStyle}
            />
            <Button
              className="btn_line_mint"
              content="업로드 > 장소선택"
              style={btnStyle}
            />
            <Button
              className="btn_line_mint"
              content="전화연동요청"
              style={btnStyle}
            />
            <Button
              className="btn_line_mint"
              content="사진요청"
              style={btnStyle}
            />
            <Button
              className="btn_line_mint"
              content="브라우저 연동"
              style={btnStyle}
              onClick={onClickOpenBrowser}
            />
            <Button
              className="btn_line_mint"
              content="데이터 초기화(로그아웃, 회원탈퇴시)"
              style={btnStyle}
              onClick={onClickInitData}
            />
            <Button
              className="btn_line_mint"
              content="화면종료"
              style={btnStyle}
              onClick={onClickScreenClose}
            />
            <Button
              className="btn_line_mint"
              content="앱종료"
              style={btnStyle}
              onClick={onClickFinish}
            />
          </div>
          <textarea
            readOnly
            value={log}
            style={{
              flex: 1,
              minHeight: "120px",
              fontSize: "13px",
              borderRadius: "0",
              color: "#666",
              overflowY: "auto",
              textIndent: 0,
              padding: "8px",
            }}
          />
        </div>
      </Contents>
    </MainContainer>
  );
};

export default NativeWebTestPage;
