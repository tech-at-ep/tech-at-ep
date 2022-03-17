import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import b1 from "../assets/blogImages/blog1.png"
import { useState } from "react";

import * as blogs from './blogs/blogs.js'

export default function Media() {
        // ADD SOME ANIMATION ON THIS PAGE TO MAKE IT COOLER...IDK WHAT TO DO THO
        // MAYBE SOMETHING COOLER THAN A RED BACKGROUND? LIKE SOME BACKGROUND ANIMATION?

        // get the blogs FIND A BETTER WAY TO DO THIS
        console.log(blogs)
        console.log(blogs.Blog1())
        console.log(blogs.length)

        // find a more scalable way to do this
        //BLOG UPDATES GO HERE
        const blogList = [blogs.Blog1(), blogs.Blog2()]

        // on blog click, open up massive card that holds the blog
        const [blogClicked, setBlogClicked] = useState(false)

        console.log(blogList[0])
        console.log(blogList[0].img.src)
        // cleanly generate all the blogs in the relevant places
        const Blogs = ({ blogList }) => {
            let rows = [];
            // temp
            //blogList = [{title:"Title", img:b1.src, author:"Author"}, {title:"Title", img:b1.src, author:"Author"}, {title:"Title", img:b1.src, author:"Author"}, {title:"Title", img:b1.src, author:"Author"}]

            for (var i = 0; i < blogList.length; i += 3) {
                rows.push(
                    <div style={{display:"flex", flexDirection:"row"}}>
                {
                    blogList.slice(i, i + 3)
                      .map(b => (
                            <BlogCard featured={false}
                                 heading="" title={b.title} img={b.img.src} author={b.author}/> ))
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

    return <div style={{backgroundColor:"#FF5A5F"}}>
        <Navbar blog={true}/>
        <div style={{height:"40px", backgroundColor:"#FF5A5F"}} ></div>
        <BlogCard featured={true}
                  heading="Featured" title={"Title"} img={b1.src} author="Author"/>

        <Blogs blogList={blogList}></Blogs>
        {/* <div style={{display:"flex", flexDirection:"row"}}>
        <BlogCard featured={false}
                  heading="" title={"Title"} img={b1.src} author="Author"/>
        <BlogCard featured={false}
                  heading="" title={"Title"} img={b1.src} author="Author"/>
        <BlogCard featured={false}
                  heading="" title={"Title"} img={b1.src} author="Author"/>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
        <BlogCard featured={false}
                  heading="" title={"Title"} img={b1.src} author="Author"/>
        <BlogCard featured={false}
                  heading="" title={"Title"} img={b1.src} author="Author"/>
        <BlogCard featured={false}
                  heading="" title={"Title"} img={b1.src} author="Author"/>
        </div> */}

    </div>
}
