interface FriendBoxProps {
  name: string;
  imgUrl: string;
  userType: string;
}

export const FriendBox = ({ name, imgUrl, userType }: FriendBoxProps) => {
  return (
    <>
      <p>
        <img src={`/images/${imgUrl}`} alt={`${name}님의 프로필 이미지`} />
      </p>
      <span>
        {userType === "B" && (
          <em>
            <img src="/images/inc/icon_check_org.svg" alt="브랜드유저 마크" />
          </em>
        )}
        {name}
      </span>
    </>
  );
};
