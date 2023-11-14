import React from "react"

export default function ProjectDetail(props) {
    return (
        <div className={`project-detail-container ${props.mode ? "dark" : ""}`}>
            <div className="center-container">
                <h1>Write something...</h1>
            </div>
        </div>
    )
}