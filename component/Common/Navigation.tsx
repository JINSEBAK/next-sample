import { Button } from "./BasicUIElements";
import classNames from "classnames";
import Router from "next/router";

const NAV_BAR = [
  { name: "홈", url: "/home", icon: "icon_home" },
  { name: "스토어", url: "/search", icon: "icon_shopping_bag" },
  { name: "디스커버", url: "/", icon: "icon_discover" },
  { name: "스크랩", url: "/mypage", icon: "icon_bookmark" },
  { name: "내 정보", url: "/settings", icon: "icon_user" },
];

interface NavigationProps {
  page?: string;
}

const Navigation = ({ page }: NavigationProps) => {
  const onClickHandle = (url: string) => {
    Router.push(url);
  };

  return (
    <footer id="footer" className="show">
      <div className="fot_toast_box">
        <p>토스트 메시지</p>
      </div>
      <Button className="btn_upload_write" content="업로드(등록)" />
      <ul className="fot_gnb_wrap">
        {NAV_BAR.map((item, index) => {
          return (
            <li key={index}>
              <Button
                className={classNames(page === item.url && "on")}
                data-url={item.url}
                onClick={() => onClickHandle(item.url)}
              >
                <p>
                  <img src={`/images/inc/${item.icon}.svg`} alt={item.name} />
                </p>
                <span>{item.name}</span>
              </Button>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Navigation;
