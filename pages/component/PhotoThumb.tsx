import styled, { css } from "styled-components";
import { createSelectable } from "react-selectable-fast";
import className from "classnames";

const ThumbContainer = styled.div`
  width: calc(100% / 3);
  padding: 4px;
  position: relative;
`;
const Thumb = styled.div`
  width: 100%;
  background-color: #f2f3f6;
  ${(props) =>
    props.isSelected &&
    css`
      background-color: yellow;
    `}
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

const PhotoThumb = ({ id, selectableRef, isSelected, isSelecting }) => {
  //
  const onChangeHandler = () => {
    console.log("onChange");
  };

  return (
    <ThumbContainer
      className={className("thumb-container", isSelected ? "selected" : "")}
      ref={selectableRef}
      id={`selectable${id}`}
    >
      <label className="checkbox">
        <input
          type="checkbox"
          name="thumb-check"
          checked={isSelected ? true : false}
          onChange={onChangeHandler}
        />
        <span></span>
      </label>
      <Thumb isSelected={isSelected} />
    </ThumbContainer>
  );
};

export default createSelectable(PhotoThumb);
