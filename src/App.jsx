import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import AboutPage from "./components/AboutPage/AboutPage"
import BlogPage from "./components/BlogPage/BlogPage"

function App() {
  return (
    <div>
      <BrowserRouter> {/* For now, we just need this because of reasons */}
        
        <Routes> {/* Our routes live inside this component */}

          {/* We use a Route component for each 'page' in our application
          Each Route has a path (the url) and an element (component to display that page) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
