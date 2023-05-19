import Comfortaa from "assets/fonts/Comfortaa/Comfortaa.ttf";
import { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: Comfortaa;
    src: url(${Comfortaa}) format('truetype');
  }
`;
export default GlobalFonts;
