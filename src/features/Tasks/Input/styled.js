import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 2px solid ${({theme}) => theme.color.brightGray};
`;
