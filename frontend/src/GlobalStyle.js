import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Quicksand', sans-serif;
      box-sizing: border-box;
    }

    html,
    body,
    #root {
      /* width: 100%; */
      /* height: 100%; */
      margin: 0;
      padding: 0;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    #root {
      /* overflow: auto; */
    }

    body {
      overscroll-behavior-y: none;
      color: white;
      background: #c4c4c4;
      margin-top: 100px;
      @media (max-width: 768px) {
        margin-top: 60px;
  }

    }
`;

export default GlobalStyle;
