import React from "react"
import { Link } from "react-router-dom"
import projectdata from "../assets/data/project"

export default function Projects(props) {
    const projectsEl = projectdata.map(data => 
    <div key={data.id} className="project-el">
        <Link to={`/projects/${data.id}`} className="link-without-underline">
            <h3 className="project-title">{data.name}</h3>
        </Link>
        <p className="project-desc">{data.desc}</p>
        {data.skills.map(skill => <button className="project-skill">{skill}</button>)}
    </div>    
    )

    return (
        <div className={`projects-container ${props.mode ? "dark" : ""}`}>
            <div className="center-container">
                {projectsEl}
            </div>
        </div>
    )
}