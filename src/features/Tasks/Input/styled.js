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
