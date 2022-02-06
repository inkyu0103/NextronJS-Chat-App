import { css } from "@emotion/react";
import { COLOR } from "../constants/color";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nanum Gothic", sans-serif;
  }
  html {
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
  #__next {
    width: 100%;
    height: 100%;
    background: ${COLOR.blue0};
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid;

    :focus {
      outline: 1px solid ${COLOR.blue3};
    }
  }
`;
