import React from "react"
import ava from "../assets/main-image.png"

export default function Home(props) {
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
                <img src={ava} className="home-image" alt="My most challenging trekking adventure to Bidoup - the highest mountain in Lam Dong province." />
            </div>            
            <div className="home-content end">
                <p>The most exciting thing in life for me has always been learning something new, and 
                the most meaningful thing is getting to share what I’ve learned with others. Until now, 
                I’ve been given so many opportunities to do both - as a teacher and a self-taught 
                developer.</p>
                <p>I love making all the repeated things work automatically to enhance performance and 
                bringing machine learning models into production.</p>
                <p>Recently, I’ve been on a funny journey applying a great deal of knowledge that I gained 
                from <a href="https://web.stanford.edu/class/cs106b/" target="_blank" rel="noreferrer">Programming Abstractions CS106B</a>, <a href="https://stanford-cs161.github.io/winter2023/" target="_blank" rel="noreferrer">Design and Analysis of Algorithms CS161</a>, and <a href="https://scrimba.com/learn/frontend" target="_blank" rel="noreferrer">Scrimba Frontend Career Path</a>. These 
                courses blew my mind and gave me a window on how proper coding style should be, some of 
                the projects that I have been working on include:</p>
                <ul className="home-project-list">
                    <li><a href="/" target="_blank" rel="noreferrer">Bulky Web (.NET framework, C#)</a></li>
                    <li><a href="https://github.com/CherylYul/front" target="_blank" rel="noreferrer">More than 20 Frontend projects (ReactJS, TailwindCSS)</a></li>
                    <li><a href="https://github.com/CherylYul/spacex-first-stage-landing-prediction" target="_blank" rel="noreferrer">SpaceX first stage landing prediction (Scraping, Python, ML, SQL, Dashboard)</a></li>
                    <li><a href="https://github.com/CherylYul/algorithm" target="_blank" rel="noreferrer">More than 30 coding exercises (Python, C++)</a></li>
                    {/* <li><a href="/" target="_blank" rel="noreferrer">VanLife app (ReactJS)</a></li> */}
                    {/* <li><a href="/" target="_blank" rel="noreferrer">Huffman (C++, Qt framework)</a></li> */}
                </ul>
                <p>I’m building a Chinese starter course for working people and pursuing the goal of having 
                    an effective Chinese learning community for everyone.</p>
                <p>Out side of my coding and teaching time, I enjoy lying on bed, reading books, savoring
                    Vietnamese food, and practicing yoga stretches. You can reach me via email to let me 
                    know if we share interests or have similar direction towards the future!</p>
            </div>
        </div>
    </div>
    )
}