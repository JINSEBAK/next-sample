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
  onClick?: () => void;
  name: string;
  address: string;
}

export const SearchPlaceItem = ({ onClick, name, address }: PlaceItemProps) => {
  return (
    <Button onClick={onClick}>
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
