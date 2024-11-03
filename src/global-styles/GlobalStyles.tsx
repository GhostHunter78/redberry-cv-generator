import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #bcbcbc;
  background-color: #fff;
  border-radius: 4px;
  font-size: 1rem;
  padding: 14px 16px;
  margin-bottom: 8px;
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
  margin-bottom: 8px;
`;

export const StyledHint = styled.p`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #2e2e2e;
  margin: 0;
`;
