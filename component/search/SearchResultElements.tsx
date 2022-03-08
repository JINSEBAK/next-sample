import { Button } from "../Common/BasicUIElements";

export const SearchResultContainer = ({ children }) => {
  return (
    <div className="sesarch_content_result">
      <div className="s_tab_contents">
        <section>{children}</section>
      </div>
    </div>
  );
};

interface PlaceItemProps {
  name: string;
  address: string;
  placeInfo: any;
  onClickItem?: (place) => void;
}

export const SearchPlaceItem = ({
  name,
  address,
  placeInfo,
  onClickItem,
}: PlaceItemProps) => {
  return (
    <Button onClick={() => onClickItem(placeInfo)}>
      <span className="name">{name}</span>
      <span className="address">{address}</span>
    </Button>
  );
};

export const User = () => {
  return <div>user</div>;
};

export const Family = () => {
  return <div>Family</div>;
};

export const Place = () => {
  return <div>Place</div>;
};

export const HashTag = () => {
  return <div>HashTag</div>;
};

export const Product = () => {
  return <div>Product</div>;
};

export const Brand = () => {
  return <div>Brand</div>;
};
