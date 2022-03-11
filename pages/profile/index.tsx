import {
  MainContainer,
  Contents,
  ContentsInner,
} from "../../component/Common/CommonUIElements";
import SubHeader from "../../component/Common/SubHeader";
import { useState } from "react";
import Link from "next/link";
import SlidePopup from "../../component/Common/SlidePopup";
import { ProfileMenu } from "../../lib/types/common";
import { Button, Icon } from "../../component/Common/BasicUIElements";
import { UserProfileSummary } from "./ProfileElements";
import { useRouter } from "next/router";
import ThumbnailFeed from "../../component/Feed/ThumbnailFeed";

const Profile = () => {
  //
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const onClickOpenClose = () => {
    setOpen(!open);
  };

  const onClickMenu = (item: string) => {
    console.log(item);
  };

  // 팔로우 버튼 클릭
  const onClickFollow = () => {
    alert("팔로우 했어요.\n토스트 hook 만들어볼 것!");
    //return <Toast message="팔로우 했어요" />;
  };

  return (
    <MainContainer>
      <SubHeader
        onClickOpenClose={onClickOpenClose}
        title={router.query.name}
      />
      <Contents className="ssg_profile">
        <ContentsInner type="section" className="sec_profile">
          <UserProfileSummary userInfo={1} communityInfo={2} />

          <div className="profile_txt">
            <p>길가는 나그네를 돕는 댕댕이와 냥냥이</p>
          </div>
          <div className="profile_family">
            <dl>
              <dt>가족</dt>
              <dd>
                <ul className="family_list xscroll_list">
                  <li className="list_item">
                    <Link href="#">
                      <a>
                        <span className="img">
                          <img src="/images/test2.jpeg" alt="냥냥이" />
                        </span>
                        <span className="냥냥이" />
                      </a>
                    </Link>
                  </li>
                  <li className="list_item">
                    <Link href="#">
                      <a>
                        <span className="img">
                          <img src="/images/test3.jpeg" alt="냥냥이" />
                        </span>
                        <span className="냥냥이" />
                      </a>
                    </Link>
                  </li>
                  <li className="list_item">
                    <Link href="#">
                      <a>
                        <span className="img">
                          <img src="/images/test4.jpeg" alt="냥냥이" />
                        </span>
                        <span className="냥냥이" />
                      </a>
                    </Link>
                  </li>
                  <li className="list_item">
                    <Link href="#">
                      <a>
                        <span className="img">
                          <img src="/images/test5.jpeg" alt="냥냥이" />
                        </span>
                        <span className="냥냥이" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div className="profile_follow_list">
            <ul className="follow_list">
              <li className="list_item">
                <img src="/images/test2.jpeg" alt="아코야건강하자" />
              </li>
            </ul>
            <p className="follow_txt">
              <span>아코야건강하자</span> 님이 팔로우하고 있습니다.
            </p>
          </div>
          <div className="profile_follow_btn btns_wrap">
            <Button
              className="btn btn_solid"
              content="팔로우"
              onClick={onClickFollow}
            />
          </div>
        </ContentsInner>
        <ContentsInner type="section" className="sec_gallery">
          {/* 아이콘 - 여러장 이미지: icon_slide / 영상: icon_video / 장소: icon_place */}
          <ul className="gallery_list">
            <li className="list_item">
              <ThumbnailFeed
                imgUrl={["/images/test2.jpeg"]}
                feedType={"video"}
                isPlace={true}
                userNm={"닉네임12345"}
              />
            </li>
          </ul>
        </ContentsInner>
      </Contents>

      <SlidePopup
        open={open}
        onClose={onClickOpenClose}
        overlayClickClose={true}
        menu={ProfileMenu}
        onSelect={onClickMenu}
      />
    </MainContainer>
  );
};

export default Profile;
