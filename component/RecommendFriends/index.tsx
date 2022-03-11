import Link from "next/link";
import { FriendBox } from "./RecommendFriendsElements";

const FRIENDS = [
  {
    name: "복실언니네집 옆에사는 땡이",
    imgUrl: "test_img1.jpeg",
    userType: "U",
  },
  { name: "땡자마미", imgUrl: "test5.jpeg", userType: "B" },
  { name: "워니얍", imgUrl: "test3.jpeg", userType: "U" },
  { name: "주비엄마", imgUrl: "test4.jpeg", userType: "U" },
  { name: "빵이네집", imgUrl: "test2.jpeg", userType: "U" },
  { name: "러블리즈", imgUrl: "test_img1.jpeg", userType: "U" },
  {
    name: "복실언니네집 옆에사는 땡이",
    imgUrl: "test_img1.jpeg",
    userType: "U",
  },
  { name: "땡자마미", imgUrl: "test_img1.jpeg", userType: "U" },
  { name: "워니얍", imgUrl: "test_img1.jpeg", userType: "U" },
  { name: "주비엄마", imgUrl: "test_img1.jpeg", userType: "U" },
  { name: "빵이네집", imgUrl: "test_img1.jpeg", userType: "U" },
  { name: "러블리즈", imgUrl: "test_img1.jpeg", userType: "U" },
];

const RecommendFriends = () => {
  return (
    <div className="slider_main_profile">
      <p>추천 친구</p>
      <ul>
        {FRIENDS.map((item, index) => {
          return (
            <li key={index}>
              <Link href="#">
                <a>
                  <FriendBox
                    name={item.name}
                    imgUrl={item.imgUrl}
                    userType={item.userType}
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
