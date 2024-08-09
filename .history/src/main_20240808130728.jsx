import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Blogs from "./Components/contents/home/Blogs.jsx";
import OurProjects from "./Components/contents/OurProjects.jsx";
import About from "./Components/contents/About/About.jsx";
import ConnectUs from "./Components/contents/ConnectUs/ConnectUs.jsx";
import Auth from "./Components/auth/Auth.jsx";
import Login from "./Components/auth/login/Login.jsx";
// import Signup from "./Components/auth/Singup/Signup.jsx";
import Blog from "./Components/contents/Blogs/Blog.jsx";

import Dashboard from "./Components/dashboard/Dashboard.jsx";


import store from "./Components/store/index.js";
import CustomerTable from "./Components/dashboard/Pages/Outlet/Customers/CustomerTable.jsx";
import GalleryTable from "./Components/dashboard/Pages/Outlet/Gallerys/GalleryTable.jsx";
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
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/connectUs",
        element: <ConnectUs />,
      },
    
      // {
      //   path: "/auth/login",
      //   element: <Login />,
      // },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      // {
      //   path: "/auth/signup",
      //   element: <Signup />,
      // },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <CustomerTable />,
      },
      {
        path: "gallery",
        element: <GalleryTable />,
      },
      {
        path: "permission",
        element: <GalleryTable />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <Provider store={ConfigStore}> */} <RouterProvider router={Route} />
  </Provider>
);
