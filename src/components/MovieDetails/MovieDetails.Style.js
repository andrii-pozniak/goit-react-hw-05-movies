import styled from "styled-components";


export const Section = styled.section`
padding-top:  ${p => p.theme.space[5]}px;;
padding-left: ${p => p.theme.space[5]}px;
padding-right: ${p => p.theme.space[5]}px;
`
export const Card = styled.div`
display: flex;
margin-top: ${p => p.theme.space[5]}px;
`
export const Details = styled.div`
padding: ${p => p.theme.space[5]}px;


`
export const Title = styled.h2`
padding: ${p => p.theme.space[1]}px;
margin: ${p => p.theme.space[1]}px;
margin-bottom: ${p => p.theme.space[5]}px;
margin-top: ${p => p.theme.space[5]}px;
`
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
 export const GenresName = styled.p`
 display: flex;
 /* padding-left: ${p => p.theme.space[3]}px;
 padding-right: ${p => p.theme.space[3]}px; */
 `
 export const BackButton = styled.a`
 width: ${p => p.theme.space[7]}px;
 height: ${p => p.theme.space[5]}px;
 padding: ${p => p.theme.space[2]}px;
 border: ${p => p.theme.borders.normal};
 background-color: ${p => p.theme.colors.background};
 border-radius: ${p => p.theme.radii.normal};
 box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 
 0px 1px 1px rgba(0, 0, 0, 0.14),
 0px 2px 1px rgba(0, 0, 0, 0.2);
 `
 export const Item = styled.div`
 padding: ${p => p.theme.space[3]}px;

box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 
0px 1px 1px rgba(0, 0, 0, 0.14),
0px 2px 1px rgba(0, 0, 0, 0.2);
 `