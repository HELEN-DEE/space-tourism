import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Destination from "./components/pages/Destination";
import Crew from "./components/pages/Crew";
import Technology from "./components/pages/Technology";
import './index.css'


const Layout = () => (
  <>
    <Header />
    <Outlet />
    
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // The layout includes the header and an Outlet for the pages
    children: [
      { index: true, element: <Home /> },
      { path: "destination", element: <Destination /> },
      { path: "crew", element: <Crew /> },
      { path: "technology", element: <Technology /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
