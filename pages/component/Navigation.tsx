import styled from "styled-components";
import Link from "next/link";
import classNames from "classnames";

const NAV_BAR = [
  { name: "A", url: "/home" },
  { name: "B", url: "/search" },
  { name: "C", url: "/" },
  { name: "D", url: "/mypage" },
  { name: "E", url: "/settings" },
];

const StyledNavigation = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #f9f9f9;
  border-top: 1px solid #f1f1f1;
`;
interface NavigationProps {
  page: string;
}

const Navigation = ({ page }: NavigationProps) => {
  return (
    <StyledNavigation>
      <nav>
        <ul>
          {NAV_BAR.map((item, index) => {
            return (
              <li
                key={index}
                className={classNames(page === item.url && "active")}
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;
