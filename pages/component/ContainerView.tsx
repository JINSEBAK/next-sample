import styled from "styled-components";

const ThumbList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const ThumbListContainer = ({ children }) => {
  return <ThumbList className="list-container">{children}</ThumbList>;
};
