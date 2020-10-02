import styled from "styled-components";
import {NavLink} from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
  text-decoration: none;
  color:  ${({theme}) => theme.color.white};;
  padding: 10px;

  &.${activeClassName} {
    font-weight: bold;
  }

  &:hover {
    transition: 1s;
    filter: brightness(0.8);
  }
`;

export const List = styled.ul`
  background-color: ${({theme}) => theme.color.teal};
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px;
  margin: 0px;
`;
