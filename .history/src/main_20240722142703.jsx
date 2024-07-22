import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigStore } from "./Components/store/config.jsx";
import Blogs from "./Components/contents/home/Blogs.jsx";
import OurProjects from "./Components/contents/OurProjects.jsx";
import About from "./Components/contents/About/About.jsx";
import ConnectUs from "./Components/contents/ConnectUs/ConnectUs.jsx";
import Signup from "./Components/auth/Singup/Signup.jsx";
import Auth from "./Components/auth/Auth.jsx";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Blogs />,
      },
      {
        path: "/projects",
        element: <OurProjects />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/connectUs",
        element: <ConnectUs />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
      // {
      //   path: "/auth/login",
      //   element: <Login />,
      // },
    ],
  
  },
  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Log />,
      },
      {
        index: true,
        element: <Signup />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={ConfigStore}>
    {/* <Provider store={ConfigStore}> */} <RouterProvider router={Route} />
  </Provider>
);
