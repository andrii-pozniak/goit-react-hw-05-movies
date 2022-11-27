import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
padding: ${p => p.theme.space[4]}px
`

export const Header = styled.div `
display: flex;
justify-content: start;
padding: ${p => p.theme.space[4]}px;

 box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 
 0px 1px 1px rgba(0, 0, 0, 0.14),
 0px 2px 1px rgba(0, 0, 0, 0.2);
`
export const Link = styled(NavLink)`
padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.middle};
   :not(:last-child){
    margin-right: ${p => p.theme.space[4]}px;
    :hover:not(.active), :focus:not(.active) {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary}; 
    }
  }
    &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
    
 }

`