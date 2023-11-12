import React from "react"
import projectsList from "../assets/projectsList"

export default function Projects() {
    const projectsEl = projectsList.map(data => 
    <div key={data.id} className="project-el">
        <h3 className="project-title">{data.name}</h3>
        <p className="project-desc">{data.desc}</p>
        {data.skills.map(skill => <button className="project-skill">{skill}</button>)}
    </div>    
    )

    return (
        <div className="projects-list-container">
            {projectsEl}
        </div>
    )
}