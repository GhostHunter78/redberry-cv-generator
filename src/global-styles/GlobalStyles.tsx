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
  margin-top: 8;
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
