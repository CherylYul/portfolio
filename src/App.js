import React from "react"
// Switch to HashRouter since GitHub pages doesn't support the tech used by the BrowserRouter
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Blogs from "./pages/Blogs"
import BlogDetail from "./pages/BlogDetail"
import Chinese from "./pages/Chinese"
import Footer from "./components/Footer"
import Header from "./components/Header"
import './App.css';

function App() {
  const [dark, setDark] = React.useState(false)
  function toggleTheme() { setDark(prev => !prev) }

  return (
    <HashRouter>
        <Header mode={dark} handleClick={toggleTheme} />
        <Routes>
            <Route path="/" element={<Home mode={dark} />} />
            <Route path="/about" element={<About mode={dark} />} />
            <Route path="/projects" element={<Projects mode={dark} />} />
            <Route path="/blogs" element={<Blogs mode={dark} />} />
            <Route path="/blogs/:id" element={<BlogDetail mode={dark} />} />
            <Route path="/chinese" element={<Chinese mode={dark} />} />
        </Routes>
        <Footer mode={dark} />
    </HashRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;