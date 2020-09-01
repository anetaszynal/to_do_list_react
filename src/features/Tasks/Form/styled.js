import styled from 'styled-components';

export const FormContener = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 15px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr
   }
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 2px solid #eee;
`;

export const FormButton = styled.button`
  padding: 10px;
  border: none;
  background-color: teal;
  color: white;

   &:hover {
    transition: background-color 1s, transform 2s;
    background-color: rgba(0, 128, 128, 0.712);
    transform: scale(1.2);
   }
`;