import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({theme}) => theme.color.teal};

  &:hover {
    transition: 1s;
    filter: brightness(130%);
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding: 15px;
  border-bottom: 2px solid ${({theme}) => theme.color.brightGray};
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 15px;
  align-items: center;

  ${({hidden}) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const ListButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${({theme}) => theme.color.greenLeaf};
  border: none;
  color: ${({theme}) => theme.color.white};

  &:hover {
    transition: 1s;
    filter: brightness(130%);
  }

  ${({deleteTask}) =>
    deleteTask &&
    css`
      background-color: ${({theme}) => theme.color.red};

      &:hover {
        background-color: ${({theme}) => theme.color.brightRed};
      }
    `}
`;

export const ListContent = styled.span`
  ${({done}) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;
