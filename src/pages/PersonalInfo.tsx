import styled from "styled-components";
import Header from "../components/Header";
import {
  GeneralButton,
  HiddenFileInput,
  InputDiv,
  NextPageBtnDiv,
  NumberInput,
  PersonalForm,
  StyledButton,
  StyledHint,
  StyledInput,
  StyledLabel,
  TextArea,
} from "../global-styles/GlobalStyles";
import GobackButton from "../components/GobackButton";
import { useEffect, useRef, useState } from "react";
import CvComponent from "../components/CvComponent";
import { Link, useLocation } from "react-router-dom";
import { useFormData } from "../Context/FormDataContext";

function PersonalInfo() {
  const location = useLocation();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedImgUrl, setUploadedImgUrl] = useState<string | null>(null);

  const { name, surname, phone, email, aboutInfo, setFormData } = useFormData();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setUploadedImgUrl(base64String);
        localStorage.setItem("uploadedImgUrl", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const savedImgUrl = localStorage.getItem("uploadedImgUrl");
    if (savedImgUrl) {
      setUploadedImgUrl(savedImgUrl);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Container>
      <LeftSideDiv>
        <GobackButton previousLocation={"/home"} />
        <Content>
          <Header pageTitle={"პირადი ინფო"} PageNumber={"1"} />
          <PersonalForm>
            <InputDiv>
              <StyledLabel>სახელი</StyledLabel>
              <StyledInput
                placeholder="შეიყვანეთ სახელი"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
              <StyledHint>მინიმუმ 2 ასო</StyledHint>
            </InputDiv>
            <InputDiv>
              <StyledLabel>გვარი</StyledLabel>
              <StyledInput
                placeholder="შეიყვანეთ გვარი"
                type="text"
                name="surname"
                value={surname}
                onChange={handleChange}
              />
              <StyledHint>მინიმუმ 2 ასო</StyledHint>
            </InputDiv>
          </PersonalForm>
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
          <StyledLabel>ჩემ შესახებ (არასავალდებულო)</StyledLabel>
          <TextArea
            name="aboutInfo"
            value={aboutInfo}
            onChange={handleChange}
          />
          <StyledHint style={{ marginTop: "8px" }}>
            მაქსიმუმ 300 სიტყვა
          </StyledHint>
          <div className="flex-col gapY-35 mt-30 w-full">
            <InputDiv>
              <StyledLabel>ელ.ფოსტა</StyledLabel>
              <StyledInput
                placeholder="example@gmail.com"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </InputDiv>
            <InputDiv>
              <StyledLabel>მობილურის ნომერი</StyledLabel>
              <NumberInput
                placeholder="შეიყვანეთ მობილურის ნომერი"
                type="number"
                name="phone"
                value={phone}
                onChange={handleChange}
                min={0}
              />
              <StyledHint>მინიმუმ 7 და მაქსიმუმ 15 ციფრი</StyledHint>
            </InputDiv>
          </div>
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

export default PersonalInfo;

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

const FileUploadDiv = styled.div`
  width: fit-content;
  margin: 40px 0;
  display: flex;
  align-items: center;
  gap: 20px;
`;
