import styled from "styled-components";
import { CvComponentProps } from "../types";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

function CvComponent({
  name,
  surname,
  email,
  phone,
  aboutInfo,
}: CvComponentProps) {
  return (
    <Main>
      <NameAndSurnameDiv>
        <NameAndSurname>{name || ""}</NameAndSurname>
        <NameAndSurname>{surname || ""}</NameAndSurname>
      </NameAndSurnameDiv>
      <IconAndInfo style={{ marginBottom: "10px" }}>
        {email ? <IoMail style={{ fill: "#898989" }} /> : ""}
        {email ? email : ""}
      </IconAndInfo>
      <IconAndInfo>
        {phone ? <FaPhone style={{ fill: "#898989" }} /> : ""}
        {phone ? phone : ""}
      </IconAndInfo>
      {aboutInfo ? <AboutMeHeading>ჩემ შესახებ</AboutMeHeading> : ""}
      {aboutInfo ? <AboutText>{aboutInfo}</AboutText> : ""}
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
  font-size: 34px;
  font-weight: bold;
  color: #f93b1d;
`;

const IconAndInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AboutMeHeading = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #f93b1d;
  margin-top: 30px;
`;

const AboutText = styled.p`
  width: 432px;
  overflow-wrap: break-word;
  font-weight: 400;
  font-size: 1rem;
  line-height: 22px;
  text-transform: lowercase;
  margin-top: 1rem;
`;
