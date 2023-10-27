import React from "react"
import { Link, useSearchParams} from "react-router-dom"
import blogsList from "../assets/blogsList"

export default function Blogs(props) {
    const [searchParams, setSearchParams] = useSearchParams()
    const tagFilter = searchParams.get("tag")

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    const displayedBlogs = tagFilter ? 
        blogsList.filter(blog => blog.tags.includes(tagFilter)) : blogsList

    const blogElements = displayedBlogs.map(blog => 
        <div key={blog.id} className="post-container">
            <small className="post-date">{blog.date}</small>
            <Link 
                to={`/blogs/${blog.id}`} 
                state={{
                    search: `?${searchParams.toString()}`,
                    tag: tagFilter
                }}
            >
                <h3 className="post-title">{blog.title}</h3>
            </Link>
            {blog.tags.map(tag => 
                <button className={`blog-type ${tag === tagFilter ? "selected": ""}`}>
            {tag}</button>)}
        </div>
    )

    return (
        <div className={props.mode ? "dark" : ""}>
            <div className={`blog-list-container ${props.mode ? "dark" : ""}`}>
                <h3 className="blog-filter bold">Filter:</h3>
                <div className="blog-list-filter-buttons">
                    <button 
                        onClick={() => handleFilterChange("tag", "life")}
                        className={`blog-type ${tagFilter === "life" ? "selected": ""}`}>
                            life
                    </button>
                    <button 
                        onClick={() => handleFilterChange("tag", "career")}
                        className={`blog-type ${tagFilter === "career" ? "selected": ""}`}>
                            career
                    </button>
                    <button 
                        onClick={() => handleFilterChange("tag", "computer science")}
                        className={`blog-type ${tagFilter === "computer science" ? "selected": ""}`}>
                            computer science
                    </button>
                </div>
                {blogElements}
            </div>
        </div>
    )
}