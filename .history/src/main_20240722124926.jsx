import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";

import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import { ConfigStore } from "./Components/store/config.jsx";
import Blogs from './Components/contents/home/Blogs.jsx';



const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Blogs />,
      },
      // {
      //   path: "/product",
      //   element: <ProductDetails />,
      // },
      // {
      //   path: "/category",
      //   element: <Categories />,
      // },
      // {
      //   path: "/subcategory",
      //   element: <SubCategory />,
      // },
     
    ],
  }])



  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Provider store={ConfigStore}>
      {" "}
      <RouterProvider router={Route} />
    </Provider>
  );
