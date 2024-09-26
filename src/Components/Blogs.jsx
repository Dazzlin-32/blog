import { useNavigate, useOutletContext } from "react-router-dom";
import OneBlog from "./OneBlog";
import data from './userapi'
import NavBar from "./NavBar";
 
function Blogs() {
    const [isLogged, setIsLogged] = useOutletContext()

    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/blogs/${id}`)
    }
    console.log(data)
    return ( 
        <>

            <NavBar />
            <OneBlog/>
            <div className="blogsContainer" id="blogs">
                {
                    data.map((x) => 
                        
                        <div className="blogsCard" onClick={()=> {handleClick(x.id)}}>
                            <div class="bg">
                            </div>
                            <h3>{x.title}</h3>
                            <p>{x.body.slice(0,45) }...<span><a href="/blogs/">Read  More</a></span>   </p>
                            <div class="blob"></div>
                        </div>
                     
                    )
                    
                }
                
            </div>
        </>

     );
}

export default Blogs;