import Link from "next/link";
import { Button } from "../../component/Common/BasicUIElements";

export const UserProfileSummary = ({ userInfo, communityInfo }) => {
  return (
    <div className="profile_header">
      <div className="ph_item">
        <div className="img">
          <Button>
            <img src="/images/test8.jpeg" alt="닉네임12345님의 프로필 이미지" />
          </Button>
        </div>
      </div>
      <div className="ph_item">
        <div className="feed">
          <span className="num">1,356</span>
          <span className="txt">피드</span>
        </div>
        <Link href="/home">
          <a className="follower">
            <span className="num">189</span>
            <span className="txt">팔로워</span>
          </a>
        </Link>
        <Link href="/home">
          <a className="following">
            <span className="num">1,473</span>
            <span className="txt">팔로잉</span>
          </a>
        </Link>
      </div>
    </div>
  );
};
