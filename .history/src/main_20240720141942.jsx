import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Blog from './Components/contents/Blogs/Blog.jsx'
import About from './Components/contents/About/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <About />
    <About />
    {/* <Blog /> */}
    {/* <App /> */}
  </React.StrictMode>,
)
