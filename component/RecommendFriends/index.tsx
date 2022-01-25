import Link from "next/link";
import { FriendBox } from "./RecommendFriendsElements";

const FRIENDS = [
  { name: "복실언니네집 옆에사는 땡이", imgUrl: "test_img1.jpeg" },
  { name: "땡자마미", imgUrl: "test_img1.jpeg" },
  { name: "워니얍", imgUrl: "test_img1.jpeg" },
  { name: "주비엄마", imgUrl: "test_img1.jpeg" },
  { name: "빵이네집", imgUrl: "test_img1.jpeg" },
  { name: "러블리즈", imgUrl: "test_img1.jpeg" },
  { name: "복실언니네집 옆에사는 땡이", imgUrl: "test_img1.jpeg" },
  { name: "땡자마미", imgUrl: "test_img1.jpeg" },
  { name: "워니얍", imgUrl: "test_img1.jpeg" },
  { name: "주비엄마", imgUrl: "test_img1.jpeg" },
  { name: "빵이네집", imgUrl: "test_img1.jpeg" },
  { name: "러블리즈", imgUrl: "test_img1.jpeg" },
];

const RecommendFriends = () => {
  return (
    <div className="slider_main_profile">
      <ul>
        {FRIENDS.map((item, index) => {
          return (
            <li key={index}>
              <Link href="#">
                <a>
                  <FriendBox
                    name={item.name}
                    imgUrl={item.imgUrl}
                    colorNum={(index % 6) + 1}
                  />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecommendFriends;
