import React from "react"
import data from "../assets/data"

export default function Chinese(props) {
    const lectureElements = data.map(lec => 
        <div className={`lecture ${lec.current ? "on" : "" }`} key={lec.id}>
            <h3>{lec.title}</h3>
            <p>Topics: {lec.topic}</p>
            <h4>Lecture Resources</h4>
            <ul>
                <li>Lecture Notes: <a href={lec.notes}>[Drive]</a></li>
                <li>Lecture Slide: <a href={lec.slide}>[Canva]</a></li>
                <li>Lecture Challenge: <a href={lec.challenge}>[Canva]</a></li>
                <li>Lecture Notes: <a href={lec.newVoc}>[Quizlet]</a></li>
            </ul>
        </div>
    )
    return (
        <div className={`chinese-container ${props.mode ? "dark" : ""}`}>
            <h1>Basic Chinese</h1>  
            <p>
                This course will provide new learners all basic necessary tools which will boost 
                your future self-taught journey. The course will give you fundamental approaches 
                and mindsets about how to study and be familiar with Chinese characters, why have 
                to know pinyin tables and Chinese radical. You will also learn common daily used 
                conversations (self-introduction, weather conversations, daily shopping, describe 
                things, etc) and actually get hand on practicing your own Chinese expression.
            </p>
            <div className="lecture-container">
                {lectureElements}
            </div>
        </div>
    )
}