import styled from "styled-components";
import { HeaderProps } from "../types";

function Header({ pageTitle, PageNumber }: HeaderProps) {
  return (
    <ContentDiv>
      <Pagetitle>{pageTitle}</Pagetitle>
      <PageNumbers>{PageNumber}/3</PageNumbers>
    </ContentDiv>
  );
}

export default Header;

const ContentDiv = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3px;
  border-bottom: 1px solid #1a1a1a;
`;

const Pagetitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #1a1a1a;
  font-family: sans-serif;
  margin: 0;
`;

const PageNumbers = styled(Pagetitle)`
  font-size: 18px;
  font-weight: normal;
  font-family: sans-serif;
  margin: 0;
`;
