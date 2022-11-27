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
   align-items: baseline;
  

`
export const Li = styled.li`
display: flex;
flex-direction: column;
align-items: center;
&:hover {
      transform: scale(1.05);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 
 0px 1px 1px rgba(0, 0, 0, 0.14),
 0px 1px 1px rgba(0, 0, 0, 0.2);
    }
`
export const Page = styled.p`
margin: ${p => p.theme.space[1]}px;
margin-top: ${p => p.theme.space[2]}px;
    padding: ${p => p.theme.space[1]}px;
 padding: ${p => p.theme.space[2]}px;
 margin-right: auto;
    margin-left: auto;
`
export const Avatar = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 180px;
    margin: ${p => p.theme.space[1]}px;
    text-decoration: dashed;
    background-image: url('compo');
    font-family: 'Roboto';
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m}px;
    line-height: ${p => p.theme.lineHeights.body};
    `