import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ChartList from "./components/ChartList/ChartList";
import "./font/font.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family: "Pretendard";
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "chartlist",
        element: <ChartList />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
