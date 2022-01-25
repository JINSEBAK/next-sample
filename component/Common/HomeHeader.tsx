import Router from "next/router";
import { Button } from "./BasicUIElements";

interface HeaderProps {}

const Header = () => {
  const onClickHandle = (pageUrl: string) => {
    if (pageUrl) {
      Router.push(pageUrl);
    }
  };
  return (
    <header id="header">
      <h1>
        <a href="#">MOLLY'S</a>
      </h1>
      <div className="hd_homebtn_wrap">
        <Button
          className="btn_hdsearch"
          content="HD SEARCH"
          onClick={() => onClickHandle("/search")}
        />
        <Button
          className="btn_hdcart"
          content="HD CART"
          onClick={() => onClickHandle("/cart")}
        >
          <em>17</em>
        </Button>
        <Button
          className="btn_hdmap"
          content="HD MAP"
          onClick={() => onClickHandle("/map")}
        />
      </div>
    </header>
  );
};

export default Header;
