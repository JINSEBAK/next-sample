import classNames from "classnames";
import styled, { css } from "styled-components";
import Icon from "../Icon";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../Common/BasicUIElements";

export const LogContainer = ({ children }) => {
  return <section className="sec_feed_wrap">{children}</section>;
};

interface FamilyBoxProps {
  imgUrl: string;
  name: string;
}
export const FamilyBox = ({ imgUrl, name }: FamilyBoxProps) => {
  return (
    <Link href="#">
      <a>
        <img src={`/images/${imgUrl}`} alt={`${name}님의 프로필 이미지`} />
      </a>
    </Link>
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
  return (
    <div className="sec_feed_titlebox">
      <Link href="#">
        <a className="sec_fdt_userbox">
          <img
            src={userInfo.profileUrl}
            alt={`${userInfo.name}님의 프로필 이미지`}
          />
        </a>
      </Link>
      <dl>
        <dt>
          {/* 뱃지 있는 경우 노출  */}
          <em>
            <img src="/images/badge_test.svg" alt="뱃지" />
          </em>{" "}
          {userInfo.name}
        </dt>
        <dd>
          <Link href="#">
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
          {userInfo.family.map((item, index) => (
            <li key={index}>
              <FamilyBox imgUrl={item.imgUrl} name={item.name} />
            </li>
          ))}
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

  return (
    <div className={classNames("sec_feed_sliderbox", `sec_fds_${alignType}`)}>
      <ul>
        <li>
          <img src="/images/test2.jpeg" alt="테스트2 냥이의 이미지" />
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
  );
};

// 미디어 하단 정보
export const LogContents = () => {
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

  return (
    <div className="sec_feed_infobox">
      {/* 탑 영역 버튼s */}
      <div className="sec_fdi_topbox">
        <Button
          className={classNames("btn_fdi_favorite", isLike && "on")}
          onClick={onClickLike}
        >
          <span>1,363</span>
        </Button>
        <Button className="btn_fdi_comment">
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