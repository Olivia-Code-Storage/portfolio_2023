import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      font-weight: 600;
      font-style: normal;
      src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot');
      src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2') format('woff2');
      font-display: swap;
  }

  @font-face {
      font-family: 'Pretendard';
      font-weight: 800;
      font-style: normal;
      src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.eot');
      src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-ExtraBold.woff2') format('woff2');
      font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Pretendard';
    font-weight: normal;
    font-style: normal;
    vertical-align: baseline;
    vertical-align: baseline;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
  }

  ol, ul, li {
    list-style: none;
  }

  a { 
    text-decoration: none;
    color: inherit;
  }

  img { 
    max-width: 100%;
    border: 0;
    vertical-align: middle;
  }

  input, select, button, textarea {
    vertical-align: middle;
  }

  button, input[type=button] {
    cursor: pointer;
  }

  table { 
    border-collapse: collapse;
  }

  button { 
    background-color: transparent;
  }

  textarea {
    resize: none;
  }
  
  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
  }
`
