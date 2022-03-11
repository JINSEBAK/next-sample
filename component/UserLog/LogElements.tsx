import classNames from "classnames";
import styled, { css } from "styled-components";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Button, Icon } from "../Common/BasicUIElements";
import { useSpring, animated } from "@react-spring/web";
import {
  createUseGesture,
  dragAction,
  pinchAction,
  usePinch,
} from "@use-gesture/react";
import { useRouter } from "next/router";

// 액션 생성
const useGesture = createUseGesture([dragAction, pinchAction]);

export const LogContainer = ({ children }) => {
  return <section className="sec_feed_wrap">{children}</section>;
};

interface FamilyBoxProps {
  imgUrl: string;
  name: string;
  onClickProfile?: (name: string) => void;
}
export const FamilyBox = ({ imgUrl, name, onClickProfile }: FamilyBoxProps) => {
  return (
    <a onClick={() => onClickProfile(name)}>
      <img src={`/images/${imgUrl}`} alt={`${name}님의 프로필 이미지`} />
    </a>
  );
};

interface LogTitleProps {
  isExpand: boolean;
  userInfo: any;
  logInfo: any;
  onClickExpand: () => void;
}

export const LogTitle = ({
  userInfo,
  logInfo,
  isExpand,
  onClickExpand,
}: LogTitleProps) => {
  //
  const [families, setFamilies] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // 최대 2개 노출. 이상일 경우 +개수로 노출한다.
    const MAX_COUNT = 2;
    let tmpList = [];

    userInfo.family.forEach((item, index) => {
      if (index < MAX_COUNT) {
        tmpList.push(item);
      }
    });
    setFamilies(tmpList);
  }, [userInfo]);

  // 프로필 화면으로 이동
  const onClickProfile = (name: string) => {
    router.push({
      pathname: "/profile",
      query: {
        name: name,
      },
    });
  };

  return (
    <div className="sec_feed_titlebox">
      <a
        className="sec_fdt_userbox"
        onClick={() => onClickProfile(userInfo.name)}
      >
        <img
          src={userInfo.profileUrl}
          alt={`${userInfo.name}님의 프로필 이미지`}
        />
      </a>
      <dl>
        <dt>
          {/* 뱃지 있는 경우 노출  */}
          <em>
            <img src="/images/inc/test_badge.svg" alt="뱃지" />
          </em>{" "}
          {userInfo.name}
        </dt>
        <dd>
          <Link
            href={`/map?name=${logInfo.place}&lat=${logInfo.lat}&lng=${logInfo.lng}`}
          >
            <a>
              <img src="/images/inc/icon_map_pin.svg" alt="맵 아이콘" />{" "}
              {logInfo.place}
            </a>
          </Link>
        </dd>
      </dl>

      <div
        className={classNames(
          "sec_fdt_familybox",
          isExpand && "familybox_active"
        )}
        onClick={onClickExpand}
      >
        {/* <Button className="fdt_familybox_btn"></Button> */}
        <ul>
          {families.length > 0 && (
            <>
              {families.map((item, index) => {
                return (
                  <li key={index}>
                    <FamilyBox
                      imgUrl={item.imgUrl}
                      name={item.name}
                      onClickProfile={() => onClickProfile(item.name)}
                    />
                  </li>
                );
              })}
              {userInfo.family.length > 3 && (
                <li className="sec_ffplus_btn">
                  <Button content="+3" />
                </li>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

// 미디어 컨텐츠
export const LogMedia = ({ media, alignType }) => {
  // alignType 로그 홀수번째: 우측 floating, 짝수번째: 좌측 floating
  const [isMuted, setIsMuted] = useState(true);
  const onClickMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const handler = (e) => e.preventDefault();
    document.addEventListener("gesturestart", handler);
    document.addEventListener("gesturechange", handler);
    document.addEventListener("gestureend", handler);
    return () => {
      document.removeEventListener("gesturestart", handler);
      document.removeEventListener("gesturechange", handler);
      document.removeEventListener("gestureend", handler);
    };
  }, []);

  const imageRef = useRef(null);
  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0,
  }));

  const bind = usePinch((state) => {
    console.log(state);
  });
  return (
    <>
      {/* zoom-pan-pinch 기능을 위한 컴포넌트 */}
      <div className={classNames("sec_feed_sliderbox", `sec_fds_${alignType}`)}>
        <ul>
          <li>
            {/* img > touchAction: pinch-zoom 스타일 적용 > 이미지 영역에서 문서 전체가 확대됨 */}
            {/* <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={3}
              initialPositionX={0}
              initialPositionY={0}
              centerOnInit={true}
              centerZoomedOut={true}
              wheel={{ disabled: true }}
              panning={{ disabled: true }}
            >
              <TransformComponent> */}

            <img src="/images/test2.jpeg" alt="테스트2 냥이의 이미지" />
            {/* </TransformComponent>
            </TransformWrapper> */}
            {/* mute? play? button */}
            <Button
              className={classNames("btn_fds_imgmovie", isMuted && "off")}
              content={isMuted ? "OFF" : "ON"}
              onClick={onClickMute}
            />
            <div className="btnn_fds_imgtag">
              <Button content="OFF" />
              <em>10</em>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

// 미디어 하단 정보
export const LogContents = ({ Router }) => {
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const [cntLike, setCntLike] = useState(0);

  // 좋아요 클릭!
  const onClickLike = () => {
    let cnt = isLike ? cntLike - 1 : cntLike + 1;
    setIsLike(!isLike);
    setCntLike(cnt);
  };

  const onClickBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  // 댓글 화면 이동
  const onClickReply = () => {
    Router.push("/home/reply");
  };

  return (
    <div className="sec_feed_infobox">
      {/* 탑 영역 버튼s */}
      <div className="sec_fdi_topbox">
        <Button
          className={classNames("btn_fdi_favorite", isLike && "on")}
          onClick={onClickLike}
        >
          <em />
          <span>1,363</span>
        </Button>
        <Button className="btn_fdi_comment" onClick={onClickReply}>
          <span>63</span>
        </Button>
        <div className="sec_fdi_posleft">
          <Button
            className={classNames("btn_fdi_bookmark", isBookmark && "on")}
            onClick={onClickBookmark}
          />
          <Button className="btn_fdi_more" content="더보기" />
        </div>
      </div>
      {/* 본문 */}
      <div className="sec_fdi_textbox">
        <Link href="#">
          <a>아코야건강하자</a>
        </Link>
        옷걸이는 안버리고 강아지옷 걸을때 사용할 예정이에요
        <Button className="fdi_hashtag" content="#오리고기" />
        <Button className="fdi_hashtag" content="#수제간식" />
        <Button className="fdi_hashtag" content="#옴뇸뇸" />
        유용하게 잘 쓸것같아요! @땡자마미 저희집 고양이가 미용을해서 입혀봤더니
        고양이 냐옹냐옹냐옹....
        <Button className="fdi_moretextbox" content="더보기" />
      </div>

      {/* 시간정보 */}
      <p className="sec_fdi_texttime">1시간 전</p>
    </div>
  );
};

export const LogContents2 = () => {
  const longTxt =
    "아이들이 즐겁게 노는 모습을 보니\n매일 매일 힐링되네요.\n플러스!\n따끈한 수제간식도 덤으로 먹을 수 있어\n더 건강해지는 느낌이 들어요.";

  const [txtOpen, setTxtOpen] = useState(false);
  const [view, setView] = useState(longTxt);

  useEffect(() => {
    // let tmp = cutByLen(longTxt, 50);
    // tmp = tmp.replace("\n", "<br/>");
    // tmp = tmp + "...";
    // setView(tmp);
  }, []);

  useEffect(() => {
    let tmp;
    if (txtOpen) {
      tmp = longTxt;
    } else {
      tmp = cutByLen(longTxt, 50);
      tmp = tmp + "...";
    }
    tmp = tmp.replace(/\n/g, "<br/>");
    setView(tmp);
  }, [txtOpen]);

  // 바이트 자르기
  function cutByLen(str, maxByte) {
    let b, c, i;
    for (b = i = 0; (c = str.charCodeAt(i)); ) {
      b += c >> 7 ? 2 : 1;
      if (b > maxByte) break;
      i++;
    }
    return str.substring(0, i);
  }

  // 편집된 문구 받아오기(html 태그 포함)
  const getViewTxt = () => {
    return { __html: `${view}` };
  };

  const onClickMore = () => {
    setTxtOpen(!txtOpen);
  };

  return (
    <div>
      <div>
        <div className="txt" dangerouslySetInnerHTML={getViewTxt()} />
        {/* {!txtOpen && (
            <Button text onClick={onClickMore}>
              더보기
            </Button>
          )} */}
      </div>
    </div>
  );
};
