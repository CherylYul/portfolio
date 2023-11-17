import React from "react"

export default function BlogDetail(props) {
    return (
        <div className={`blog-detail-container ${props.mode ? "dark" : ""}`}>
            <div className="center-container">
                daily blog
            </div>
        </div>
    )
}