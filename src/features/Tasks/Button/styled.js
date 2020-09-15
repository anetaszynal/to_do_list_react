import styled from "styled-components";

export const Button = styled.button`
  margin: 15px 15px 15px 0px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.color.teal};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
  }

  &:hover {
    transition: 1s;
    filter: brightness(130%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.gray};

    &:hover {
      filter: brightness(100%);
    }
  }
`;
