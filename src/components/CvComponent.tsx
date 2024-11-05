import styled from "styled-components";
import { CvComponentProps } from "../types";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { SectionLine } from "../global-styles/GlobalStyles";
import { useFormData } from "../Context/FormDataContext";

function CvComponent({ uploadedImgUrl }: CvComponentProps) {
  const location = useLocation();
  const pathname = location.pathname;
  const {
    position,
    employer,
    startDate,
    finishDate,
    jobDescription,
    name,
    surname,
    email,
    phone,
    aboutInfo,
  } = useFormData();
  return (
    <Main>
      <PerrsonalSection>
        <PersonalContent>
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
        </PersonalContent>
        {uploadedImgUrl ? (
          <UploadedPhoto src={uploadedImgUrl}></UploadedPhoto>
        ) : (
          ""
        )}
      </PerrsonalSection>
      {pathname === "/experience" ? (
        <SectionLine style={{ marginTop: "18px" }} />
      ) : (
        ""
      )}
      <ExperienceSection>
        {position || employer || startDate || finishDate || jobDescription ? (
          <ExperienceHeading>გამოცდილება</ExperienceHeading>
        ) : (
          ""
        )}
        <div className="flex-col" style={{ rowGap: "8px" }}>
          <p>{position || employer ? `${position} - ${employer}` : ""}</p>
          <p style={{ fontStyle: "italic", color: "#909090" }}>
            {startDate || finishDate ? `${startDate} - ${finishDate}` : ""}
          </p>
        </div>
        <p className="w-full">{jobDescription ? jobDescription : ""}</p>
      </ExperienceSection>
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

const PerrsonalSection = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const ExperienceSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1rem;
  margin-top: 24px;
`;

const PersonalContent = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  font-size: 24px;
  font-weight: bold;
  color: #f93b1d;
  margin-top: 30px;
`;

const ExperienceHeading = styled(AboutMeHeading)`
  margin-top: 0;
`;

const AboutText = styled.p`
  max-width: 400px;
  overflow-wrap: break-word;
  font-weight: 400;
  font-size: 1rem;
  line-height: 22px;
  text-transform: lowercase;
  margin-top: 1rem;
`;

const UploadedPhoto = styled.img`
  width: 210px;
  height: 210px;
  border-radius: 50%;
  border: none;
`;
