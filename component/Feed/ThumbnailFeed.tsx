import Link from "next/link";
import { Icon } from "../Common/BasicUIElements";

interface ThumbnailFeedProps {
  imgUrl: string[];
  feedType: string;
  isPlace?: boolean;
  userNm: string;
}

const ThumbnailFeed = ({
  imgUrl,
  feedType,
  isPlace = false,
  userNm,
}: ThumbnailFeedProps) => {
  return (
    <Link href="#">
      <a>
        {imgUrl.map((img, index) => (
          <img
            src={img}
            className="thumb"
            alt={`${userNm}님의 피드 이미지`}
            key={index}
          />
        ))}
        {imgUrl.length > 1 && <Icon name="icon_slide" />}
        {feedType === "video" && <Icon name="icon_video" />}
        {isPlace && <Icon name="icon_place" />}
      </a>
    </Link>
  );
};

export default ThumbnailFeed;
