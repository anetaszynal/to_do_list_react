import React from 'react';
import './style.css';

export const Form = () => (
  <form className="form">
    <input className="form__field" placeholder="Co jest do zrobienia?" />
    <button className="form__button">Dodaj zadanie</button>
  </form>
);