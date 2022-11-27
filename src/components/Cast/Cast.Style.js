import styled from "styled-components";

export const Page = styled.p`
margin: ${p => p.theme.space[1]}px;
margin-top: ${p => p.theme.space[2]}px;
    padding: ${p => p.theme.space[1]}px;
 padding: ${p => p.theme.space[2]}px;
 margin-right: auto;
    margin-left: auto;
    font-family: 'Roboto';
font-style: normal;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.m}px;
line-height: ${p => p.theme.lineHeights.body};
    `
export const Ul = styled.ul`
    display: grid;
    position: relative;
    top: 0;
    left: 0;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fit, 123px);
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
    export const Avatar = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 180px;
    margin: ${p => p.theme.space[1]}px;
    text-decoration: dashed;
    background-color: #F5F4FA;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m}px;
    line-height: ${p => p.theme.lineHeights.body};
    `