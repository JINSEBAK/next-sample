interface FriendBoxProps {
  name: string;
  imgUrl: string;
  colorNum: number; // 번호에 따라 테두리 컬러 다르게 적용
}

export const FriendBox = ({ name, imgUrl, colorNum }: FriendBoxProps) => {
  return (
    <>
      <p className={`slider_mpf_color${colorNum}`}>
        <img src={`/images/${imgUrl}`} alt={`${name}님의 프로필 이미지`} />
      </p>
      <span>{name}</span>
    </>
  );
};
