import React from "react"

export default function BlogDetail(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return (
        <div className={`blog-detail-container ${props.mode ? "dark" : ""}`}>
            <div className="center-container">
                Update soon...
            </div>
        </div>
    )
}