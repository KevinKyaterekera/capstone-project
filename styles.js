import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }body {
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;
