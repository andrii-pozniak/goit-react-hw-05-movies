import styled from 'styled-components';

export const Box = styled('input')`
margin-top:${p => p.theme.space[2]}px;
margin-right: ${p => p.theme.space[2]}px;
padding: ${p => p.theme.space[2]}px;
width: ${p => p.theme.space[9]}px;
font-family: ${p => p.theme.fonts.monospace}px;
font-size: ${p => p.theme.fontSizes.m};
border: none;
border-radius: ${p => p.theme.radii.normal};

box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 
 0px 1px 1px rgba(0, 0, 0, 0.14),
 0px 1px 1px rgba(0, 0, 0, 0.2);
`
export const Button = styled('button')`
padding: ${p => p.theme.space[2]}px;
margin-top:${p => p.theme.space[2]}px;
border-radius: ${p => p.theme.radii.normal};
font-family: ${p => p.theme.fonts.monospace}px;
border: none;
font-size: ${p => p.theme.fontSizes.m};
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 
 0px 1px 1px rgba(0, 0, 0, 0.14),
 0px 1px 1px rgba(0, 0, 0, 0.2);
`