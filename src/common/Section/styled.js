import styled from 'styled-components';

export const SectionContent = styled.section`
  margin: 10px 0px;
  background-color: white;
`;

export const SectionHeader = styled.header`
  padding: 15px;
  border-bottom: 2px solid #eeeeee;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
   }
`;

export const SectionTitle = styled.h2`
  margin: 0;
`;

export const SectionBody = styled.div`
  padding: 15px;
`;