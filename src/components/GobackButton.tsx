import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md";
import { LocationProps } from "../types";

function GobackButton({ previousLocation }: LocationProps) {
  return (
    <Link to={`${previousLocation}`}>
      <Circle>
        <MdArrowBackIosNew style={{ fill: "black" }} />
      </Circle>
    </Link>
  );
}

const Circle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
`;

export default GobackButton;
