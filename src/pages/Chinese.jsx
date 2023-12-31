import React from "react"
import chinesedata from "../assets/data/chinese"

export default function Chinese(props) {
    const lectureElements = chinesedata.map(lec => 
        <div className={`lecture ${lec.current ? "on" : "" }`} key={lec.id}>
            <h3>{lec.title}</h3>
            <p>Topics: {lec.topic}</p>
            <h4>Lecture Resources</h4>
            <ul>
                <li>Lecture Notes: <a href={lec.notes} target="_blank" rel="noreferrer">[Drive]</a></li>
                <li>Lecture Slide: <a href={lec.slide} target="_blank" rel="noreferrer">[Canva]</a></li>
                <li>Lecture Challenge: <a href={lec.challenge} target="_blank" rel="noreferrer">[Canva]</a></li>
                <li>Lecture Notes: <a href={lec.newVoc} target="_blank" rel="noreferrer">[Quizlet]</a></li>
            </ul>
        </div>
    )
    return (
        <div className={`chinese-container ${props.mode ? "dark" : ""}`}>
            <div className="center-container">
                <h1>Basic Chinese</h1>  
                <p>
                    This course will provide new learners all basic necessary tools which will boost 
                    your future self-taught journey. The course will give you fundamental approaches 
                    and mindsets about how to study and be familiar with Chinese characters, why have 
                    to know pinyin tables and Chinese radical. You will also learn common daily used 
                    conversations (self-introduction, weather conversations, daily shopping, describe 
                    things, etc) and actually get hand on practicing your own Chinese expression.
                </p>
                <div className="lecture-container end">
                    {lectureElements}
                </div>
            </div>
        </div>
    )
}