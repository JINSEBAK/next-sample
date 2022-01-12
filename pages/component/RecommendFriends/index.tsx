import { FriendBox } from "./RecommendFriendsElements";

const FRIENDS = [
  { name: "댕댕이1" },
  { name: "댕댕이2" },
  { name: "댕댕이3" },
  { name: "댕댕이5" },
  { name: "냥냥이1냥냥이냥냥이냥냥이" },
  { name: "냥냥이2" },
  { name: "냥냥이3" },
  { name: "냥냥이4" },
  { name: "냥냥이5" },
];

const RecommendFriends = () => {
  return (
    <div className="recommend">
      <ul>
        {FRIENDS.map((item, index) => {
          return (
            <li key={index}>
              <FriendBox name={item.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecommendFriends;
