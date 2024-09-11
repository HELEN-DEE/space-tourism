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
import Moon from "./components/pages/DestinationPages/Moon";
import Mars from "./components/pages/DestinationPages/Mars";
import Europa from "./components/pages/DestinationPages/Europa";
import Titan from "./components/pages/DestinationPages/Titan"
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
      { path: "destination",
        element: <Destination />,
        children: [
          {index:true, element: <Moon/>},
          { path: "moon", element: <Moon /> },
          { path: "mars", element: <Mars /> },
          { path: "europa", element: <Europa /> },
          { path: "titan", element: <Titan /> },
        ]
      },
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
