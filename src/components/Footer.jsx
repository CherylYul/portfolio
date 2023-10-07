import React from "react"

export default function Footer(props) {
    const [formData, setFormData] = React.useState({
        email: "",
        content: "",
    })

    function handleChange(e) {
        setFormData(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }

    return (
    <footer className={props.mode ? "dark" : ""}>
        <div className="footer--left">
            <p>I'm always ready to listening to interesting stories and sincere feedback,
                or having useful conversations as well as meaningful collaboration.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    placeholder="Your email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email} 
                    className="cfd9de-border"/>
                <textarea onChange={handleChange} 
                    placeholder="Would you like to share somethings?"
                    name="content"
                    value={formData.content}
                    className="cfd9de-border" />
                <button className="cfd9de-border">Send</button>
            </form>
        </div>
        <div className="footer--right">
            <h4>Contact me.</h4>
            <div className="contact-container">
                <div>
                    <i className="fa-brands fa-github fa-xl"></i>
                    <p>Github</p>
                </div>
                <div>
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                    <p>LinkedIn</p>                
                </div>
                <div>
                    <i className="fa-brands fa-twitter fa-xl"></i>
                    <p>Twitter</p>                
                </div>
                <div>
                    <i className="fa-solid fa-envelope fa-xl"></i>
                    <p>Email</p>                
                </div>
            </div>
        </div>
    </footer>
    )
}