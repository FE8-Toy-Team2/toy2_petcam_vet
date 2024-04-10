import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration: none;
    color: inherit;
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
