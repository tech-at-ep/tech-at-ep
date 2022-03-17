export default function BlogCard({heading, title, featured, img, author}) {
    return featured ?
    <div
        className="w-full m-auto mt-20 max-w-screen-xl bg-white p-10 rounded-lg shadow-lg z-40 relative" 
        style={{border:"5px solid #252222", maxWidth:"70%", marginTop:"65px", marginBottom:"50px"}} >
        
        <h2 style={{color:"#FF5A5F"}} className="font-bold font-display text-center text-4xl mb-10 text-gray-700">
            {heading}
        </h2>

        <h2 style={{color:"#252222"}} className="font-bold font-display text-center text-4xl mb-10 text-gray-700">
            {title}
        </h2>

        <img src={img} style={{margin:"auto", maxWidth:"99%", maxHeight:"600px", borderRadius:"5px"}}></img>

        <div style={{textAlign:"center"}} className="mt-10">
            {author}
        </div>

    </div>
    :
    <div
        className="w-full m-auto max-w-screen-xl bg-white p-10 rounded-lg shadow-lg z-40 relative" 
        style={{border:"2px solid #252222", maxWidth:"30%", marginBottom:"70px"}} >

        <img src={img} style={{margin:"auto", maxWidth:"99%", minHeight:"70%", maxHeight:"270px", borderRadius:"5px"}}></img>

        <h2 style={{color:"#252222"}} className="font-bold font-display text-center mt-5 text-4xl mb-1 text-gray-700">
            {title}
        </h2>

        <div style={{textAlign:"center"}} className="mt-3">
            {author}
        </div>

    </div>

}