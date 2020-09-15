import styled from "styled-components";

export const FormButton = styled.button`
  padding: 10px;
  border: none;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    transition: background-color 1s, transform 1s;
    filter: brightness(130%);
    transform: scale(1.1);
  }
`;
