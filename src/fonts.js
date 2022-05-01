import { createGlobalStyle } from 'styled-components';
import latoRegular from './assets/fonts/Lato-Regular.woff';

const FontStyles = createGlobalStyle`
 @font-face {
     font-family: Lato;
     src: url(${latoRegular}) format('woff');
 }
`;

export default FontStyles;
