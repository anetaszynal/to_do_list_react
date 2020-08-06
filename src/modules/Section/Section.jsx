import React from 'react';
import './style.css';

export const Section = ({ title, body, additionalContent }) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__title">{title}</h2>
      {additionalContent}
    </header>
    <div className="section__body">
      {body}
    </div>
  </section>
);