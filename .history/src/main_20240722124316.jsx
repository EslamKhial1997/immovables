import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Blog from './Components/contents/Blogs/Blog.jsx'
import About from './Components/contents/About/About.jsx'
import ConnectUs from './Components/contents/ConnectUs/ConnectUs.jsx'
import Projects from './Components/contents/Projects/Projects.jsx'



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
  },
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Projects /> */}
    {/* <ConnectUs /> */}
    {/* <About /> */}
    {/* <Blog /> */}
    <App />
  </React.StrictMode>,
)
