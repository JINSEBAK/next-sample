import classNames from "classnames";
import styled, { css } from "styled-components";
import Icon from "../Icon";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../Button";

export const LogContainer = ({ children }) => {
  return <div className="log-container">{children}</div>;
};

export const LogHeaderWrapper = ({ children }) => {
  return <div className="log-header">{children}</div>;
};

export const MyFamily = ({ color }) => {
  return <div className="my-family" style={{ backgroundColor: color }} />;
};

export const LogHeader = ({ isExpand, onClickExpand }) => {
  const [list, setList] = useState([
    "#f1dcfd",
    "#fdf2dc",
    "#fddcdc",
    "#c2c3ff",
  ]);

  return (
    <LogHeaderWrapper>
      <div className="user">
        <div className="user-profile">
          <div className="img"></div>
        </div>
        <div className="user-profile">
          <span className="user-profile-nick">개장수</span>
          <span className="user-profile-badge">Badge</span>
        </div>
      </div>
      <div
        className={classNames("family", isExpand && "active")}
        onClick={onClickExpand}
      >
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <MyFamily color={item} />
            </li>
          ))}
        </ul>
      </div>
    </LogHeaderWrapper>
  );
};

export const LogMedia = () => {
  return <div className="log-media">Media</div>;
};

export const LogInfoWrapper = ({ children }) => {
  return <div className="log-info">{children}</div>;
};

interface IconTextBoxProps {
  name: string;
  active?: boolean;
  content?: number | string;
  link?: string;
  onClickHandler?: () => void;
}
export const IconTextBox = ({
  name,
  active,
  content,
  link,
  onClickHandler,
}: IconTextBoxProps) => {
  return (
    <div className="icon-txt-box" onClick={onClickHandler}>
      <div className="icon-txt-inner">
        <Icon name={name} active={active} />
        {/* content && 사용시 0이 넘어오면 span을 못 그림 */}
        {content !== null && content !== undefined && (
          <>
            {link ? (
              <Link href={link}>
                <a>{content}</a>
              </Link>
            ) : (
              <span>{content}</span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// 미디어 하단 정보
export const LogInfo = () => {
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
    <LogInfoWrapper>
      <div className="float half">
        <IconTextBox
          name="like"
          active={isLike}
          content={cntLike}
          onClickHandler={onClickLike}
        />
        <IconTextBox name="comment" content={15} />
      </div>
      <div className="float half">
        <IconTextBox
          name="bookmark"
          active={isBookmark}
          onClickHandler={onClickBookmark}
        />
        <IconTextBox name="more" />
      </div>
      <div className="float full">
        <IconTextBox
          name="marker"
          content="까뮤양평타운플레이그라운드"
          link="/map"
        />
      </div>
    </LogInfoWrapper>
  );
};

export const LogContentsWrapper = ({ children }) => {
  return <div className="log-contents">{children}</div>;
};

export const LogContents = () => {
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
    <LogContentsWrapper>
      <div>
        <div>
          <div className="txt" dangerouslySetInnerHTML={getViewTxt()} />
          {!txtOpen && (
            <Button text onClick={onClickMore}>
              더보기
            </Button>
          )}
        </div>
      </div>
    </LogContentsWrapper>
  );
};
