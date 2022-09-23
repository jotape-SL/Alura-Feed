import React from "react";
import styled, { isStyledComponent } from "styled-components";
import { StyleSheet } from "./StyleSheet";
import {parseStyleSheet} from '@skynexui/responsive_stylesheet';

interface StyledBaseComponent {
  styleSheet?: StyleSheet
}

cosnt StyledBaseComponent = styled.div<StyledBaseComponent>`
  ${({styleSheet}) => parseStyleSheet(styleSheet)}
`

export const BaseComponent =(props) =>{
  return(
    <StyledBaseComponent {...props}/>
  )
}

BaseComponent.defaultProps = {
  styleSheet: {}
}
