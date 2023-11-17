import React from "react"

export default function About(props) {
    return (
        <div className={`about-container ${props.mode ? "dark" : ""}`}>
            <div className="center-container">
                <h1>Hello World!</h1>
            </div>
        </div>
    )
}