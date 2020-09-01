import styled from 'styled-components';

export const ButtonsContener = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  margin: 15px 15px 15px 0px;
  background: transparent;
  border: none;
  color: teal;

  @media (max-width: 767px) {
     width: 100%;
  }

  &:hover {
    transition: 1s;
    color: rgba(0, 128, 128, 0.712);
  }

  &:disabled {
    color: gray;
  }
`;