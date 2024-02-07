import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { Helmet, HelmetProvider } from "react-helmet-async";

let routers = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={routers}></RouterProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
