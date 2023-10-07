import React from "react"
import { Link } from "react-router-dom"

export default function Header(props) {
    return (
        <header className={props.mode ? "dark" : ""}>
            <Link className="site-main" to="/">YulCheryl</Link>
            <nav>
                <Link className="site-about" to="./about">About</Link>
                <Link className="site-projects" to="./projects">Projects</Link>
                <Link className="site-blogs" to="./blogs">Blogs</Link>
                <Link className="site-chinese" to="./chinese">Chinese</Link>
            </nav>
            <div className="theme">
                <p className={props.mode ? "" : "bold"}>Light</p>
                <div className={`toggle-container ${props.mode ? "dark" : ""}`}>
                    <div className="toggle-btn" onClick={props.handleClick}></div>
                </div>
                <p className={props.mode ? "bold" : ""}>Dark</p>
            </div>
        </header>
    )
}