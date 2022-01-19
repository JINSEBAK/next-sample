import { Button } from "./BasicUIElements";
import classNames from "classnames";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDoubleClick } from "../../hooks";

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
  //

  const router = useRouter();

  const onClickHandle = (url: string) => {
    router.push(url);
  };

  // TODO! 홈 화면일 경우, 홈 버튼에 더블탭 이벤트 있음 - 기획 이슈 체크 후 적용
  const onDoubleClickHome = () => {
    alert("더블클릭");
  };

  return (
    <footer id="footer" className="show">
      <div className="fot_toast_box">
        <p>토스트 메시지</p>
      </div>
      <Button className="btn_upload_write" content="업로드(등록)" />

      {/* 현재 홈화면일 경우, 홈 버튼 더블탭시 스크롤 제일 위로 이동 */}
      <ul className="fot_gnb_wrap">
        {NAV_BAR.map((item, index) => {
          return (
            <li key={index}>
              <Button
                className={classNames(page === item.url && "on")}
                data-url={item.url}
                onClick={() => onClickHandle(item.url)}
                //onDoubleClick={onDoubleClickHome}
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
