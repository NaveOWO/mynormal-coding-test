import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

#root {
height: 100vh;
}

  html {
    font-size: 62.5%;
    box-sizing: border-box
  }

  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0
  }

  ul {
    list-style: none
  }

  li {
    list-style: none;
  }

  button, input, select {
    margin: 0;
    background-color: transparent;
    border: none;
  }

  *, :after, :before {
    box-sizing: inherit;
  }

  img, video {
    max-width: 100%;
    height: auto
  }

  iframe {
    border: 0
  }


  table {
    border-spacing: 0;
    border-collapse: collapse
  }

  td, th {
    padding: 0
  }

  * {
    font-family: 'Noto Sans KR', 'Noto Sans' , sans-serif;
    white-space: pre-wrap;


    &::-webkit-scrollbar {
      display: none;
    }
  }

  input {
    padding:0 ;
    border: none;
    outline: none;
  }

  textarea {
    resize: none;
    background-color: transparent;
    border: none;
    outline: none;
  }

  abbr {
    text-decoration: none;
  }
  
  button, select {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
  
  input, select {
    background: inherit;
  }
  
`;

export default GlobalStyle;
