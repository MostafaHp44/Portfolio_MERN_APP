import {React} from "react";
import { Link } from "react-scroll";
import BurgerList from './BurgerList'
import './NavBar.css'



const NavBar = () => {
    return (
    <div className="BigNav" id="Home">

<div className="l-nav">
    <div className="namepage"></div>
<span> </span> 
</div>

<div className='r-nav'>
   <nav className="lists">
        <ul className="p-list" >
        <Link smooth spy to="Home"><li>Home</li></Link> 
        <Link smooth spy to="AboutMe"><li>About me</li></Link>
        <Link smooth spy to="Services"><li>My Services</li></Link>
        <Link smooth spy to="ContactUs"><li>Contact Us</li></Link> 
       </ul>
    
      </nav>
</div>
<div>
    <BurgerList/>

</div>



    </div>
    );
}
 
export default NavBar;