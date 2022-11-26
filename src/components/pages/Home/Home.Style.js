import styled from "styled-components";

export const Ul = styled.ul`
display: grid;
    position: absolute;
    top: 110px;
    left: ${p => p.theme.space[6]}px;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fit, 200px);
    grid-gap: ${p => p.theme.space[3]}px;
    margin-top: ${p => p.theme.space[1]}px;
    margin-bottom: ${p => p.theme.space[1]}px;
    padding: ${p => p.theme.space[1]}px;
    list-style: none;    
   align-items: stretch;

`
export const Li = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
export const Page = styled.p`
  margin: ${p => p.theme.space[1]}px;
  margin-top: ${p => p.theme.space[2]}px;
    padding: ${p => p.theme.space[1]}px;
 padding: ${p => p.theme.space[2]}px;
 margin-right: auto;
    margin-left: auto;
    `