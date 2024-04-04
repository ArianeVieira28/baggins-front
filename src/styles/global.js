import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Open Sans',-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased !important;

    overflow: hidden;
  }

  #root {
    position: relative;
  }

  p {
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;
