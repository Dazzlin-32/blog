import { useOutletContext } from 'react-router-dom'
import '../App.css'



function NavBar() {
    const [isLogged, setIsLogged] = useOutletContext()

    const handleClick = (e)=> {
        e.preventDefault()
        setIsLogged(false)
    }
    return ( 
        <nav className='navBar'>
            <a href="/">My personal Blog</a>
            <a href="#blogs">Blogs</a>
            <a href="#contact">Contact</a>
            {isLogged? <a href="/" onClick={handleClick}>Log Out</a> : <a href="/login">Login</a>}
            
        </nav>
     );
}

export default NavBar;