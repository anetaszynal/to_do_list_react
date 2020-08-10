import React from 'react';
import { SectionContent, SectionHeader, SectionTitle, SectionBody } from './styled';

export const Section = ({ title, body, additionalContent }) => (
  <SectionContent>
    <SectionHeader>
      <SectionTitle>{title}</SectionTitle>
      {additionalContent}
    </SectionHeader>
    <SectionBody>
      {body}
    </SectionBody>
  </SectionContent>
);