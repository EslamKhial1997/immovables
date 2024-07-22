import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import Blog from './Components/contents/Blogs/Blog.jsx'
import About from './Components/contents/About/About.jsx'
import ConnectUs from './Components/contents/ConnectUs/ConnectUs.jsx'
import Projects from './Components/contents/Projects/Projects.jsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'



const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product",
        element: <ProductDetails />,
      },
      {
        path: "/category",
        element: <Categories />,
      },
      {
        path: "/subcategory",
        element: <SubCategory />,
      },
     
    ],
  }])



  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Provider store={ConfigStore}>
      {" "}
      <RouterProvider router={Route} />
    </Provider>
  );
