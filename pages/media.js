import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import { useState } from "react";
import { ImCross } from 'react-icons/im'
import Fade from 'react-reveal/Fade';

import * as blogs from './blogs/blogs.js'

export default function Media() {        
        // on blog click, open up massive card that holds the blog
        const [blogClicked, setBlogClicked] = useState(false)
        // on blog click, open up massive card that holds the blog
        const [curBlog, setBlog] = useState({})

        // find a more scalable way to do this

        //BLOG UPDATES GO HERE
        const blogList = [blogs.Blog1(), blogs.Blog2()]

        // get the blogs FIND A BETTER WAY TO DO THIS
        function handleClick (blog) {
            setBlog(blog)
            setBlogClicked(true)
            return
        }

        // cleanly generate all the blogs in the relevant places
        const Blogs = ({ blogList }) => {
            let rows = [];
            if (blogList.length < 1) {
                return <div></div>
            }
            const featured = blogList[0]
            // set up featured blog
            rows.push(
                <BlogCard featured={true}
                        heading="Featured" title={featured.title} img={featured.img} clicked={()=>handleClick(featured)} author={featured.author}/>
            )
            
            // set up child blogs
            for (var i = 1; i < blogList.length; i += 3) {
                rows.push(
                    <div style={{display:"flex", flexDirection:"row"}}>
                {
                    blogList.slice(i, i + 3)
                      .map(b => (
                            <BlogCard featured={false}
                                 heading="" title={b.title} img={b.img} author={b.author} clicked={()=>handleClick(b)}/> 
                            ))
                  }
                  </div>
                );
            }
            return (
                <div>
                    {rows}
                </div>
            );
        }

    return <div className="blog-gradient pb-5">
        <Navbar blog={true}/>
        <div style={{height:"40px", backgroundColor:"#FF5A5F"}} ></div>
        {
            blogClicked ? <Fade>
            <div
                className="max-w-screen-xl bg-white rounded-lg shadow-lg z-4000 relative"
                style={{ padding:"60px", paddingTop:"40px", marginLeft:"5%", marginRight:"5%", marginTop:"7%", width:"90%"}}
                >
                    <div onClick={() => setBlogClicked(false)}>
                        <ImCross style={{position:"absolute", top:'50px', left:'50px'}}></ImCross>
                    </div>
                    <h2 className="font-bold font-display text-center text-5xl text-gray-700">
                        {curBlog.title}
                    </h2>
                    <h4 className="font-bold font-display mt-3 text-center text-1xl text-gray-700">
                        by {curBlog.author}
                    </h4>
                    <img src={curBlog.img.src} maxWidth="70%" maxHeight="70%"></img>

                    <div className="mt-10">
                        {curBlog.text}
                    </div>
            </div>
            </Fade>
            :
            <div style={blogClicked ? {backdropFilter: "blur(6px)"} : {}}>
                <Blogs blogList={blogList}></Blogs>
            </div>
        }


    </div>
}
