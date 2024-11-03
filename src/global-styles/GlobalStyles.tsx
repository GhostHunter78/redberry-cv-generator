import styled from "styled-components";

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
  width: 100%;
  min-height: 100px;
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

export const NumberInput = styled(StyledInput).attrs({ type: "number" })`
  /* Hide arrows for Chrome, Safari, Edge, and Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide arrows for Firefox */
  -moz-appearance: textfield;
`;
