import styled from "styled-components";
import Header from "../components/Header";
import {
  DatesForm,
  GeneralButton,
  InputDiv,
  NavigationBtnsDiv,
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
import { useEffect, useState } from "react";

function Experience() {
  const { uploadedImgUrl } = useFormData();

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const [experiences, setExperiences] = useState([
    {
      id: Date.now(),
      position: "",
      employer: "",
      startDate: "",
      finishDate: "",
      jobDescription: "",
    },
  ]);

  // Function to add a new experience module
  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        position: "",
        employer: "",
        startDate: "",
        finishDate: "",
        jobDescription: "",
      },
    ]);
  };

  // Function to handle input changes for each experience
  const handleChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setExperiences((prevExperiences) =>
      prevExperiences.map((exp) =>
        exp.id === id ? { ...exp, [name]: value } : exp
      )
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <LeftSideDiv>
        <GobackButton previousLocation={"/personal-info"} />
        <Content>
          <Header pageTitle={"გამოცდილება"} PageNumber={"2"} />
          {experiences.map((experience, index) => (
            <div className="w-full" key={experience.id}>
              <Form>
                <InputDiv>
                  <StyledLabel>თანამდებობა</StyledLabel>
                  <StyledInput
                    placeholder="დეველოპერი, დიზაინერი და ა.შ"
                    type="text"
                    name="position"
                    value={experience.position}
                    onChange={(e) => handleChange(experience.id, e)}
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
                    value={experience.employer}
                    onChange={(e) => handleChange(experience.id, e)}
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
                    value={experience.startDate}
                    onChange={(e) => handleChange(experience.id, e)}
                  />
                </InputDiv>
                <InputDiv>
                  <StyledLabel>დამთავრების თარიღი</StyledLabel>
                  <StyledInput
                    type="date"
                    name="finishDate"
                    value={experience.finishDate}
                    onChange={(e) => handleChange(experience.id, e)}
                  />
                </InputDiv>
              </DatesForm>
              <div className="flex-col mt-30 w-full">
                <StyledLabel>თანამდებობის აღწერა</StyledLabel>
                <TextArea
                  name="jobDescription"
                  value={experience.jobDescription}
                  onChange={(e) => handleChange(experience.id, e)}
                />
                <StyledHint style={{ marginTop: "8px" }}>
                  მაქსიმუმ 300 სიტყვა
                </StyledHint>
              </div>
              <SectionLine style={{ marginTop: "50px" }} />
            </div>
          ))}
          <GeneralButton
            onClick={handleAddExperience}
            style={{ marginTop: "45px" }}
            buttonBgColor="#62a1eb"
          >
            მეტი გამოცდილების დამატება
          </GeneralButton>
          <NavigationBtnsDiv>
            <Link to={"/personal-info"}>
              <GeneralButton buttonBgColor="#6b40e3">უკან</GeneralButton>
            </Link>
            <Link to={"/education"}>
              <GeneralButton buttonBgColor="#6b40e3">შემდეგი</GeneralButton>
            </Link>
          </NavigationBtnsDiv>
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
