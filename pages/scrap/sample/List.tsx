import { Card } from "./Card";

const List = (props) => {
  const { items } = props;
  return (
    <div>
      {items.map((item, index) => {
        return <Card key={index} year={item.year} player={item.player} />;
      })}
    </div>
  );
};

export default List;
