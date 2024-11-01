import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { HeaderProps } from "../types";

function Header({ previousLocation, pageTitle, PageNumber }: HeaderProps) {
  return (
    <MainDiv>
      <Link to={`${previousLocation}`}>
        <Circle>
          <MdArrowBackIosNew style={{ fill: "black" }} />
        </Circle>
      </Link>
      <ContentDiv>
        <Pagetitle>{pageTitle}</Pagetitle>
        <PageNumbers>{PageNumber}/3</PageNumbers>
      </ContentDiv>
    </MainDiv>
  );
}

export default Header;

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: 50px;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3px;
  border-bottom: 1px solid #1a1a1a;
`;

const Pagetitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #1a1a1a;
`;

const PageNumbers = styled(Pagetitle)`
  font-size: 18px;
  font-weight: normal;
`;
