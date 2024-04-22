import { BrowserRouter } from "react-router-dom";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import "./font/font.css";
import Layout from "./components/Layout/Layout";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root{
    --color-prime: #FFCD29;
    --color-black: #3D3939;
    --color-white: #FFFFFF;
    --color-gray-1: #F6F6F6;
    --color-gray-2: #EEEEEE;
    --color-gray-3: #D9D9D9;
    --color-darkgray: #999999;
    --color-salgu: #F9F4F0;
    --color-brown: #504239;

    --font-weight-light: 400;
    --font-weight-bold: 700;

    --font-size-XS: 0.8rem;
    --font-size-S: 0.9rem;
    --font-size-M: 1rem;
    --font-size-L: 1.1rem;
    --font-size-XL: 1.2rem;
    --font-size-XXL: 1.5rem;
  }
  #root{
    background-color: var(--color-gray-2);
  }
  body{
    font-family: "Pretendard", sans-serif;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Layout />
    </BrowserRouter>
  );
}

export default App;
