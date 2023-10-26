import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import AboutPage from "./components/AboutPage/AboutPage"
import BlogPage from "./components/BlogPage/BlogPage"
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <BrowserRouter> {/* For now, we just need this because of reasons */}
        
        <Nav />
      
        <Routes> {/* Our routes live inside this component */}
          {/* We use a Route component for each 'page' in our application
          Each Route has a path (the url) and an element (component to display that page) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* Creating a 404 (page not found) route - this will display if none of the above
          routes match the request */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

       <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
