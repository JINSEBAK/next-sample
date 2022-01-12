interface FriendBoxProps {
  name: string;
}

export const FriendBox = ({ name }: FriendBoxProps) => {
  return (
    <div className="rf-box">
      <div className="photo"></div>
      <span className="name">{name}</span>
    </div>
  );
};
