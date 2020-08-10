import styled, { css } from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding: 15px;
  border-bottom: 2px solid #eee;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 15px;
  align-items: center;

  ${({ hidden }) => hidden && css`
     display: none;
  `}
`;

export const ListButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: green;
  border: none;
  color: white;

  &:hover {
    transition: 1s;
    background-color: rgba(0, 128, 0, 0.712);
  }

  ${({ deleteTask }) => deleteTask && css`
    background-color: red;

    &:hover {
      background-color: rgba(255, 0, 0, 0.712);
    }
  `}
`;

export const ListContent = styled.span`
  ${({ done }) => done && css` 
    text-decoration: line-through;
   `} 
`;