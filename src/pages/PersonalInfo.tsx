import { useForm, useWatch } from "react-hook-form";
import styled from "styled-components";
import Header from "../components/Header";
import {
  GeneralButton,
  HiddenFileInput,
  NumberInput,
  StyledButton,
  StyledHint,
  StyledInput,
  StyledLabel,
  TextArea,
} from "../global-styles/GlobalStyles";
import GobackButton from "../components/GobackButton";
import { useRef, useState } from "react";
import CvComponent from "../components/CvComponent";
import { Link } from "react-router-dom";
import { CvComponentProps } from "../types";

function PersonalInfo() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedImgUrl, setUploadedImgUrl] = useState<string | null>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setUploadedImgUrl(fileUrl);
    }
  };

  const { register, control } = useForm<CvComponentProps>();

  const name = useWatch({ control, name: "name" });
  const surname = useWatch({ control, name: "surname" });
  const email = useWatch({ control, name: "email" });
  const phone = useWatch({ control, name: "phone" });
  const aboutInfo = useWatch({ control, name: "aboutInfo" });

  return (
    <Container>
      <LeftSideDiv>
        <GobackButton previousLocation={"/home"} />
        <Content>
          <Header pageTitle={"პირადი ინფო"} PageNumber={"1"} />
          <Form>
            <InputDiv>
              <StyledLabel>სახელი</StyledLabel>
              <StyledInput
                placeholder="შეიყვანეთ სახელი"
                type="text"
                id="name"
                {...register("name")}
              />
              <StyledHint>მინიმუმ 2 ასო</StyledHint>
            </InputDiv>
            <InputDiv>
              <StyledLabel>გვარი</StyledLabel>
              <StyledInput
                placeholder="შეიყვანეთ გვარი"
                type="text"
                id="surname"
                {...register("surname")}
              />
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
          <StyledLabel>ჩემ შესახებ (არასავალდებულო)</StyledLabel>
          <TextArea id="aboutInfo" {...register("aboutInfo")} />
          <div className="flex-col gapY-35 mt-30 w-full">
            <InputDiv>
              <StyledLabel>ელ.ფოსტა</StyledLabel>
              <StyledInput
                placeholder="example@gmail.com"
                type="email"
                id="email"
                {...register("email")}
              />
            </InputDiv>
            <InputDiv>
              <StyledLabel>მობილურის ნომერი</StyledLabel>
              <NumberInput
                placeholder="შეიყვანეთ მობილურის ნომერი"
                type="number"
                id="phone"
                {...register("phone")}
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
      <CvComponent
        name={name}
        surname={surname}
        email={email}
        phone={phone}
        aboutInfo={aboutInfo}
        uploadedImgUrl={uploadedImgUrl}
      />
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
  margin: 40px 0;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NextPageBtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
`;
