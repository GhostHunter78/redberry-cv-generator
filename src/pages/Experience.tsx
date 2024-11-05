import styled from "styled-components";
import Header from "../components/Header";
import {
  DatesForm,
  GeneralButton,
  InputDiv,
  NextPageBtnDiv,
  SectionLine,
  StyledHint,
  StyledInput,
  StyledLabel,
  TextArea,
} from "../global-styles/GlobalStyles";
import GobackButton from "../components/GobackButton";
import CvComponent from "../components/CvComponent";
import { Link } from "react-router-dom";
import { useFormData } from "../Context/FormDataContext";

function Experience() {
  const {
    position,
    employer,
    startDate,
    finishDate,
    jobDescription,
    setFormData,
    uploadedImgUrl,
  } = useFormData();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container>
      <LeftSideDiv>
        <GobackButton previousLocation={"/personal-info"} />
        <Content>
          <Header pageTitle={"გამოცდილება"} PageNumber={"2"} />
          <Form>
            <InputDiv>
              <StyledLabel>თანამდებობა</StyledLabel>
              <StyledInput
                placeholder="დეველოპერი, დიზაინერი და ა.შ"
                type="text"
                name="position"
                value={position}
                onChange={handleChange}
              />
              <StyledHint>მინიმუმ 2 სიმბოლო</StyledHint>
            </InputDiv>
          </Form>
          <EmployerDiv>
            <InputDiv>
              <StyledLabel>დამსაქმებელი</StyledLabel>
              <StyledInput
                placeholder="მიუთითეთ დამსაქმებელი"
                type="text"
                name="employer"
                value={employer}
                onChange={handleChange}
              />
              <StyledHint>მინიმუმ 2 სიმბოლო</StyledHint>
            </InputDiv>
          </EmployerDiv>
          <DatesForm>
            <InputDiv>
              <StyledLabel>დაწყების თარიღი</StyledLabel>
              <StyledInput
                type="date"
                name="startDate"
                value={startDate}
                onChange={handleChange}
              />
            </InputDiv>
            <InputDiv>
              <StyledLabel>დამთავრების თარიღი</StyledLabel>
              <StyledInput
                type="date"
                name="finishDate"
                value={finishDate}
                onChange={handleChange}
              />
            </InputDiv>
          </DatesForm>
          <div className="flex-col mt-30 w-full">
            <StyledLabel>თანამდებობის აღწერა</StyledLabel>
            <TextArea name="jobDescription" value={jobDescription} />
            <StyledHint style={{ marginTop: "8px" }}>
              მაქსიმუმ 300 სიტყვა
            </StyledHint>
          </div>
          <SectionLine style={{ marginTop: "50px" }} />
          <NextPageBtnDiv>
            <Link to={"/experience"}>
              <GeneralButton buttonBgColor="#6b40e3">შემდეგი</GeneralButton>
            </Link>
          </NextPageBtnDiv>
        </Content>
      </LeftSideDiv>
      <CvComponent uploadedImgUrl={uploadedImgUrl} />
    </Container>
  );
}

export default Experience;

const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
`;

const LeftSideDiv = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: baseline;
  gap: 50px;
  padding: 20px 120px 50px 30px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Form = styled.form`
  width: 100%;
  margin-top: 55px;
`;

const EmployerDiv = styled.div`
  width: 100%;
  margin-top: 40px;
`;
