import React from "react"
import ava from "../assets/logo.svg"

export default function Home(props) {
    return (
    <div className={`home-container ${props.mode ? "dark" : ""}`} >
        <div className="home--header">
            <h1>HELLO WORLD</h1>
            <div className="home--animation">
                <div className="animation-object one"></div>
                <div className="animation-object two"></div>
                <div className="animation-object three"></div>
                <div className="animation-object four"></div>
                <div className="animation-object five"></div>
            </div>
            <img src={ava} className="home--image" alt="yul's avatar" />
        </div>
        <div className="home--content">
            <p>Hi, I'm Yul.</p>
            <p>Recently, ...</p>
        </div>
    </div>
    )
}