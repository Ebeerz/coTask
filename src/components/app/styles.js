import { createGlobalStyle } from "styled-components";
import involveRegular from '../../../public/assets/fonts/Involve-Regular.otf'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 150%;
    font-weight: 400;
    color: ${(props) => props.theme.fontColorBlack};
  }

  @font-face {
    font-family: 'Involve';
    src: url(${involveRegular}) format('opentype'),
    
  }

`;