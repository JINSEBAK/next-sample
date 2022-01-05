import styled, { css } from "styled-components";

const StyleButton = styled.button`
  padding: 8px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${(props) =>
    props.primary &&
    css`
      color: white;
      background-color: navy;
      border-color: navy;
    `}
`;

function Button<Props>({ children, ...props }) {
  return <StyleButton {...props}>{children}</StyleButton>;
}

export default Button;
