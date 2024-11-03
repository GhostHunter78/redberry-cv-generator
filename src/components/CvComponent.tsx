import styled from "styled-components";
import { CvComponentProps } from "../types";

function CvComponent({ name, surname }: CvComponentProps) {
  return (
    <Main>
      <NameAndSurnameDiv>
        <NameAndSurname>{name || ""}</NameAndSurname>
        <NameAndSurname>{surname || ""}</NameAndSurname>
      </NameAndSurnameDiv>
      <div className="cv-icon-div">
        <img src="/assets/redberry-icon.svg" />
      </div>
    </Main>
  );
}

export default CvComponent;

const Main = styled.div`
  width: 45%;
  background-color: white;
  padding: 48px 75px 44px 78px;
  display: flex;
  flex-direction: column;
`;

const NameAndSurnameDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 1rem;
  max-width: 25%;
`;

const NameAndSurname = styled.p`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 24px;
  font-weight: bold;
  color: #f93b1d;
`;
