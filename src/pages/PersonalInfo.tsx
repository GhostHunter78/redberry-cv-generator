import styled from "styled-components";
import Header from "../components/Header";
import {
  HiddenFileInput,
  StyledButton,
  StyledHint,
  StyledInput,
  StyledLabel,
} from "../global-styles/GlobalStyles";
import GobackButton from "../components/GobackButton";
import { useRef } from "react";

function PersonalInfo() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file); // I'll change this logic later
    }
  };

  return (
    <Container>
      <LeftSideDiv>
        <GobackButton previousLocation={"/home"} />
        <Content>
          <Header pageTitle={"პირადი ინფო"} PageNumber={"1"} />
          <Form>
            <InputDiv>
              <StyledLabel>სახელი</StyledLabel>
              <StyledInput placeholder="შეიყვანეთ სახელი" type="text" />
              <StyledHint>მინიმუმ 2 ასო</StyledHint>
            </InputDiv>
            <InputDiv>
              <StyledLabel>გვარი</StyledLabel>
              <StyledInput placeholder="შეიყვანეთ გვარი" type="text" />
              <StyledHint>მინიმუმ 2 ასო</StyledHint>
            </InputDiv>
          </Form>
          <FileUploadDiv>
            <StyledLabel>პირადი ფოტოს ატვირთვა</StyledLabel>
            <StyledButton onClick={handleUploadClick}>ატვირთვა</StyledButton>
            <HiddenFileInput
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </FileUploadDiv>
        </Content>
      </LeftSideDiv>
      <CVSample></CVSample>
    </Container>
  );
}

export default PersonalInfo;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LeftSideDiv = styled.div`
  width: 55%;
  display: flex;
  align-items: baseline;
  gap: 50px;
  padding: 20px 120px 50px 30px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CVSample = styled.div`
  background-color: white;
  width: 45%;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 35px;
  margin-top: 55px;
`;

const InputDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FileUploadDiv = styled.div`
  width: fit-content;
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
