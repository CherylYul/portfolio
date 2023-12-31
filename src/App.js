import React from "react"
// Switch to HashRouter since GitHub pages doesn't support the tech used by the BrowserRouter
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"
import Blogs from "./pages/Blogs"
import BlogDetail from "./pages/BlogDetail"
import Chinese from "./pages/Chinese"
import Footer from "./components/Footer"
import Header from "./components/Header"
import './App.css';
// import ScrollToTop from './assets/Scroll/ScrollToTop';

function App() {
  const [dark, setDark] = React.useState(false)
  function toggleTheme() { setDark(prev => !prev) }

  return (
    <HashRouter>
      {/* <ScrollToTop> */}
        <Header mode={dark} handleClick={toggleTheme} />
        <Routes>
            <Route path="/" element={<Home mode={dark} />} />
            <Route path="/projects" element={<Projects mode={dark} />} />
            <Route path="/projects/:id" element={<ProjectDetail mode={dark} />} />
            <Route path="/blogs" element={<Blogs mode={dark} />} />
            <Route path="/blogs/:id" element={<BlogDetail mode={dark} />} />
            <Route path="/chinese" element={<Chinese mode={dark} />} />
        </Routes>
        <Footer mode={dark} />
      {/* </ScrollToTop> */}
    </HashRouter>
  );
}

export default App;