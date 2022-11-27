import styled from "styled-components";

export const Page = styled.p`
margin: ${p => p.theme.space[1]}px;
margin-top: ${p => p.theme.space[2]}px;
padding: ${p => p.theme.space[1]}px;
text-decoration: none; 
font-family: 'Roboto';
font-style: normal;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.m}px;
line-height: ${p => p.theme.lineHeights.body};

padding: ${p => p.theme.space[3]}px;
`