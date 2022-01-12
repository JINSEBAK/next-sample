import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";

const HeaderNotice = styled.div``;

const Notification = () => {
  return (
    <HeaderNotice>
      {/* 검색 */}
      <Button icon>
        <Icon name="search" />
      </Button>
      {/* 장바구니 */}
      <Button icon>
        <Icon name="cart" />
        <span className="num">3</span>
      </Button>
      {/* 알림 */}
      <Button icon>
        <Icon name="notification" />
        <span className="num">9</span>
      </Button>
    </HeaderNotice>
  );
};

export default Notification;
