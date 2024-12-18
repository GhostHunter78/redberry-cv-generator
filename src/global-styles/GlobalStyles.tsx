import styled from "styled-components";
import { GeneralButtonProps } from "../types";

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #bcbcbc;
  background-color: #fff;
  border-radius: 4px;
  font-size: 1rem;
  padding: 14px 16px;
  margin: 8px 0;
  &:focus {
    border-color: #4343dc;
    outline: none;
  }
`;

export const PersonalForm = styled.form`
  width: 100%;
  display: flex;
  gap: 35px;
  margin-top: 55px;
`;

export const DatesForm = styled(PersonalForm)`
  margin-top: 40px !important;
`;

export const StyledLabel = styled.label`
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  margin: 0;
`;

export const StyledHint = styled.p`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #2e2e2e;
  margin-bottom: 0px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
  background-color: #0e80bf;
  border: none;
  cursor: pointer;
  &:hover {
    transition: 300ms;
    background-color: #45a049;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  min-width: 100%;
  max-width: 100px;
  min-height: 100px;
  max-height: 300px;
  padding: 16px;
  border-radius: 4px;
  border: solid 1px #bcbcbc;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #2e2e2e;
  background-color: #fff;
  margin-top: 8px;
`;

export const GeneralButton = styled.button<GeneralButtonProps>`
  background-color: ${(props) => props.buttonBgColor};
  color: white;
  padding: 14px 35px;
  border-radius: 4px;
  border: none;
  font-size: 1rem;
  font-family: sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #7949ff;
    transition: 300ms;
  }
`;

export const NavigationBtnsDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
`;

export const NextPageBtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
`;

export const DateInputsDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: #c8c8c8;
`;

export const NumberInput = styled(StyledInput).attrs({ type: "number" })`
  /* Hide arrows for Chrome, Safari, Edge, and Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide arrows for Firefox */
  appearance: textfield;
`;
