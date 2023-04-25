import Bold from "assets/fonts/Unbounded/Unbounded-Bold.ttf"
import ExtraBold from "assets/fonts/Unbounded/Unbounded-ExtraBold.ttf"
import ExtraLight from "assets/fonts/Unbounded/Unbounded-ExtraLight.ttf"
import Light from "assets/fonts/Unbounded/Unbounded-Light.ttf"
import Regular from "assets/fonts/Unbounded/Unbounded-Regular.ttf"
import Black from "assets/fonts/Unbounded/Unbounded-Black.ttf";
import Medium from "assets/fonts/Unbounded/Unbounded-Medium.ttf";
import SemiBold from "assets/fonts/Unbounded/Unbounded-SemiBold.ttf";
import Exo from "assets/fonts/Exo/Exo2.ttf";
import Comfortaa from "assets/fonts/Comfortaa/Comfortaa.ttf";
import { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: Comfortaa;
    src: url(${Comfortaa}) format('truetype');
  }
`
export default GlobalFonts;
