import React from 'react';

export const Section = ({title, body}) => (
  <section>
    <h2>{title}</h2>
    {body}
  </section>
);