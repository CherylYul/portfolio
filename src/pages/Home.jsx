import React from "react"
import ava from "../assets/logo.svg"

export default function Home(props) {
    console.log("ohyeah")
    return (
    <div className={`home-container ${props.mode ? "dark" : ""}`} >
        <div className="center-container">
            <div className="home-header">
                <code>HELLO WORLD</code>
                <div className="home-animation">
                    <div className="animation-object one"></div>
                    <div className="animation-object two"></div>
                    <div className="animation-object three"></div>
                    <div className="animation-object four"></div>
                    <div className="animation-object five"></div>
                </div>
                <img src={ava} className="home-image" alt="yul's avatar" />
            </div>            
            <div className="home-content end">
                <p>The most exciting thing in life for me has always been learning something new, and 
                the most meaningful things is getting to share what I’ve learned with others. Until now, 
                I’ve been given so many opportunities to do both - as a teacher and a self-taught 
                developer.</p>
                <p>I love making all the repeated things work automatically, and enhancing program 
                performance to provide users the best experience.</p>
                <p>Recently, I’ve been in a funny journey applying a great deal of knowledge that I gained 
                from <a href="https://web.stanford.edu/class/cs106b/" target="_blank" rel="noreferrer">Programming Abstractions CS106B</a>, <a href="https://stanford-cs161.github.io/winter2023/" target="_blank" rel="noreferrer">Design and Analysis of Algorithms CS161</a>, and <a href="https://scrimba.com/learn/frontend" target="_blank" rel="noreferrer">Scrimba Frontend Career Path</a>. These 
                courses blew my mind and gave me a window on how proper coding style should be, some of 
                projects that I have worked on:</p>
                <ul className="home-project-list">
                    <li><a href="/" target="_blank" rel="noreferrer">Bulky Web (.NET framework, C#)</a></li>
                    <li><a href="/" target="_blank" rel="noreferrer">My portfolio (ReactJS, TailwindCSS)</a></li>
                    <li><a href="/" target="_blank" rel="noreferrer">SpaceX first stage landing prediction (scraping, python, ML, dashboard)</a></li>
                    <li><a href="/" target="_blank" rel="noreferrer">VanLife app (ReactJS)</a></li>
                    <li><a href="/" target="_blank" rel="noreferrer">Huffman (C++, Qt framework)</a></li>
                </ul>
                <p>I’m building a Chinese starter course for working people and pursuit to having an 
                effective Chinese learning community for everyone. </p>
                <p>Out side of my coding and teaching time, I enjoy sleeping, reading books, Vietnamese 
                food, and yoga stretch. You can reach me through mail to let me know if we have shared 
                interests, or same directions towards future!</p>
            </div>
        </div>
    </div>
    )
}