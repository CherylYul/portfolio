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
            <div className="home-content">
                <p>Hi, I'm Yul. I'm a frontend developer based out of Ho Chi Minh City, Vietnam. I love
                    building apps that solve real-world problems, and that are delightful to use. My 
                    specialities include TypeScript, ReactJS, Tailwind CSS, and Styled Components. I 
                    also have a solid grip of the fundamentals of web development ...
                </p>
                <p>When I'm not coding, I take care of my </p>
                <p>Recently, ...</p>
            </div>
        </div>
    </div>
    )
}