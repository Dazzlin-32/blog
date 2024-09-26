import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import data from './userapi'
import { useEffect, useState } from "react";

function BlogDetails(props) {

    const {id} = useParams()
    const [blogD, setBlogD] = useState()
    
    console.log(id)
    useEffect ( ()=>{
        const blogDetail = () =>  data.map(
            (x) => {
                if( x.id == id)
                    setBlogD(x)
            }
        )
        blogDetail()
        
    },[])
    
    

    return ( <>
    <NavBar/>
    <div className="containerBlog">
        {
            blogD?
            <>
            <h1>{blogD.title}</h1>
        <hr />
        <p>
            {blogD.body}
        </p></>
        :
        <h2>Loading ...</h2>
        }
        
    </div>
    </> );
}

export default BlogDetails;