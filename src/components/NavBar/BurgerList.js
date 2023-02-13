import { scaleDown as Menu } from 'react-burger-menu';
import { Link } from "react-scroll";
import './burger.css'
var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width:'12em'
    },
    bmMenu: {
    background: "linear-gradient(93deg, royalblue, #2c2727)",
     padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      height:'auto',
      listStyle: 'none'


    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
        height: "100%" ,
        color: "rgb(184 , 183, 173)",
        padding: "0.8em" ,
        display: "grid" ,
        gap: '10px', 
        liststyle: "none" ,
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      height:'0%',
      width:'0%'
      
    },
    
  }
  

const BurgerList = () => {
    return ( 
     <div>
        <nav>

        <ul className="burger-list" >
        <Menu  right styles={styles} >
        <Link smooth spy to="Home"><li>Home</li></Link> 
        <Link smooth spy to="AboutMe"><li>About me</li></Link>
        <Link smooth spy to="Services"><li>My Services</li></Link>
        <Link smooth spy to="ContactUs"><li>Contact Us</li></Link> 
        </Menu>
       </ul>

        </nav>
    </div>
    );
}
 
export default BurgerList;