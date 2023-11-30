import React from "react"
import { useParams } from "react-router-dom"
import SpaceX from "../projects/spacex"
import SUFfolio from "../projects/suffolio"

export default function ProjectDetail(props) {
    const params = useParams()
    const content = [<SUFfolio />, <SpaceX />]

    React.useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <div className={`project-detail-container ${props.mode ? "dark" : ""}`}>
            <div className="center-container">
                {content[params.id]}
            </div>
        </div>
    )
}