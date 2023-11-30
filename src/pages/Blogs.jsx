import React from "react"
import { Link, useSearchParams} from "react-router-dom"
import blogdata from "../assets/data/blog"

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
        blogdata.filter(blog => blog.tags.includes(tagFilter)) : blogdata

    const blogElements = displayedBlogs.map(data => 
    <div key={data.id} className="post-el">
        <small className="post-date">{data.date}</small>
        <Link 
            to={`/blogs/${data.id}`} 
            className="link-without-underline"
            state={{
                search: `?${searchParams.toString()}`,
                tag: tagFilter
            }}
        >
            <h3 className="post-title">{data.title}</h3>
        </Link>
        <p className="post-desc">{data.desc}</p>
        {data.tags.map(
            tag => <button className={`blog-type ${tag === tagFilter ? "selected": ""}`}>
                {tag}</button>)
        }
    </div>
    )

    return (
        <div className={`${props.mode ? "dark" : ""} blogs-container`}>
            <div className="center-container">
                <div className="filter-buttons">
                    <h3 className="bold">Category:</h3>
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
                        onClick={() => handleFilterChange("tag", "recursion")}
                        className={`blog-type ${tagFilter === "recursion" ? "selected": ""}`}>
                            recursion
                    </button>
                </div>
                {blogElements}
            </div>
        </div>
    )
}