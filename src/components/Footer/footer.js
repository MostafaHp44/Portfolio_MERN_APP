import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
    <div>

 <section className='BigFooter'>
        
        <div className='waves'>
        </div>

        <div className='texts'>

             <p>Copyright &copy; 2023 All Rights Reserved by </p>

        </div>
        
<div className='Icons'>
          <a href='https://github.com/MostafaHp44' className='icnocolor'><FontAwesomeIcon icon="fa-brands fa-github" /></a>  
          <a href='https://www.linkedin.com/in/mostafa-hp-125248119/' className='icnocolor'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
          <a href=''><FontAwesomeIcon icon="fa-brands fa-instagram" className='icnocolor'/></a>
         
</div>
 </section> 

    </div>
   
     );
}
 
export default Footer;