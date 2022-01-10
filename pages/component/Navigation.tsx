import styled from "styled-components";
import Link from "next/link";

const StyledNavigation = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #f9f9f9;
  border-top: 1px solid #f1f1f1;
`;

function Navigation() {
  return (
    <StyledNavigation>
      <nav>
        <ul>
          <li>
            <Link href="/home">A</Link>
          </li>
          <li>
            <Link href="/search">B</Link>
          </li>
          <li>
            <Link href="/">C</Link>
          </li>
          <li>
            <Link href="/mypage">D</Link>
          </li>
          <li>
            <Link href="/settings">E</Link>
          </li>
        </ul>
      </nav>
    </StyledNavigation>
  );
}

export default Navigation;
