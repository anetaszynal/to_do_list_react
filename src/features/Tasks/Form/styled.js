import styled from "styled-components";

export const FormContener = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.color.brightGray};
`;

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
