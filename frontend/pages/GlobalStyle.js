import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Quicksand', sans-serif;
      box-sizing: border-box;
    }

    html,
    body,
    #__next {
      margin: 0;
      padding: 0;
      user-select: none;
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
