import { useState } from "react";
import classNames from "classnames";
import {
  MainContainer,
  Contents,
  ContentsInner,
} from "../../../component/Common/CommonUIElements";
import SubHeader from "../../../component/Common/SubHeader";
import { Button } from "../../../component/Common/BasicUIElements";

const Reply = () => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    console.log("focus");
    setFocus(true);
  };

  const onBlur = () => {
    console.log("안 focus");
    setFocus(false);
  };

  return (
    <MainContainer>
      <SubHeader />
      <Contents className="comment">
        <ContentsInner type="section" className="sec_cmt_box">
          {/* 원글 유저 정보 */}
          <div className="sec_feed_titlebox">
            <a className="sec_fdt_userbox" href="#SPA-0167">
              <img src="/images/test_img1.jpeg" alt="" />
            </a>
            <dl>
              <dt>아코야 건강하자</dt>
              <dd>
                <a href="#">
                  <img src="/images/inc/icon_map_pin.svg" alt="" />{" "}
                  까뮤양평타운플레이그라운드
                </a>
              </dd>
            </dl>
          </div>
          <div className="sec_cmtcts_box">
            <div className="sec_cmt_text">
              매일매일 힐링되네요. <br />
              플러스!
              <br />
              따끈한 수제간식도 덤으로 먹을 수 있어 <br />
              아이가 더 건강해지는 느낌이 들어요
              <br />
              .<br />
              .<br />
              .<br />
              <Button className="fdi_hashtag" content="#수제간식" />
              <Button className="fdi_hashtag" content="#힐링" />
              <Button className="fdi_hashtag" content="#이벤트" />
            </div>
            <p className="sec_cmt_time">3시간 전</p>
          </div>

          {/* 댓글 */}
          <div className="sec_recmtcts_box">
            <div className="sec_feed_titlebox">
              <a className="sec_fdt_userbox" href="#SPA-0167">
                <img src="/images/test_img1.jpeg" alt="" />
              </a>
              <dl>
                <dt>아코야 건강하자</dt>
                <dd>
                  <a href="#">
                    <img src="/images/inc/icon_map_pin.svg" alt="" />{" "}
                    까뮤양평타운플레이그라운드
                  </a>
                </dd>
              </dl>
            </div>
            <div className="sec_recmtcts_textbox">
              <div className="sec_recmt_text">
                <p>
                  이쁘게 나와서 스크랩 했어요 자주 올려주세요 이쁘게 나와서
                  스크랩 했어요 자주 올려주세요
                </p>
                <ul className="sec_recmt_infobox">
                  <li>2시간전</li>
                  <li>좋아요 6개</li>
                  <li>
                    <button type="button">
                      <span>댓글달기</span>
                    </button>
                  </li>
                </ul>
              </div>
              <button className="sec_recmt_favoreite" type="button">
                <em>좋아요</em>
              </button>
            </div>
          </div>
          {/* 대댓글 */}
          <div className="sec_recmtcts_box rerecomment">
            <div className="sec_feed_titlebox">
              <a className="sec_fdt_userbox" href="#SPA-0167">
                <img src="/images/test_img1.jpeg" alt="" />
              </a>
              <dl>
                <dt>아코야 건강하자</dt>
                <dd>
                  <a href="#">
                    <img src="/images/inc/icon_map_pin.svg" alt="" />{" "}
                    까뮤양평타운플레이그라운드
                  </a>
                </dd>
              </dl>
            </div>
            <div className="sec_recmtcts_textbox">
              <div className="sec_recmt_text">
                <p>
                  이쁘게 나와서 스크랩 했어요 자주 올려주세요 이쁘게 나와서
                  스크랩 했어요 자주 올려주세요
                </p>
                <ul className="sec_recmt_infobox">
                  <li>2시간전</li>
                  <li>좋아요 6개</li>
                  <li>
                    <button type="button">
                      <span>댓글달기</span>
                    </button>
                  </li>
                </ul>
              </div>
              <button className="sec_recmt_favoreite" type="button">
                <em>좋아요</em>
              </button>
            </div>
          </div>
        </ContentsInner>
        {/* 입력폼 */}
        <div className={classNames("cts_input_wrap")}>
          <p className="inp_userbox">
            <img src="/images/test2.jpeg" alt="" />
          </p>
          <textarea
            rows={1}
            className="cts_input_val"
            placeholder="댓글을 써주세요"
            style={{ height: "15px" }}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <Button content="등록" />
        </div>
      </Contents>
    </MainContainer>
  );
};

export default Reply;
