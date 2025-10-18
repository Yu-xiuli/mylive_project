import { ReactNode } from "react";
import styled from "styled-components";

const Flip = ({
  beforeContent,
  afterContent,
}: {
  beforeContent: ReactNode;
  afterContent: ReactNode;
}) => {
  return (
    <PicWallBox>
      <div className="flip_before">{beforeContent}</div>
      <div className="flip_after">{afterContent}</div>
    </PicWallBox>
  );
};

export default Flip;

const PicWallBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    .flip_before {
      opacity: 0.5;
    }
    .flip_after {
      opacity: 1;
    }
  }
  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .flip_before {
    z-index: 2;
    opacity: 1;
    transition: opacity 0.5s linear;
  }
  .flip_after {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.5s linear;
    font-family: cursive;
    font-size: 16px;
    font-weight: bold;
  }
`;
