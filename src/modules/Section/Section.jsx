import React from 'react';

export const Section = ({ title, body, additionalContent }) => (
  <section>
    <header>
      <h2>{title}</h2>
      {additionalContent}
    </header>
    {body}
  </section>
);