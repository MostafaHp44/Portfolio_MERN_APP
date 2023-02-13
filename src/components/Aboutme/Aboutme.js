import './Aboutme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React ,{ useEffect}from 'react'
import cv from './CV MooHp.pdf'


const Aboutme = () => {
    useEffect(() => {
        document.body.className==='dark'
        ? <><div  className='define' style={{color: '#fff'}}> Hi , Every one  </div>
          <button className="button-55" style={{borderColor:'#fff'}}></button></>
        : <><div  className='define' style={{color: '#242D49'}}> Hi , Every one  </div></>
                }, []);
    return ( 
    <div className="mainsec" id='AboutMe'>

        <div className="sec-1">

            <div className='define'>
            <FontAwesomeIcon icon="fas fa-quote-left" />
           <sub> Who am I </sub> 
             <FontAwesomeIcon icon="fas fa-quote-right" />
            
            </div>
       
            <span>My name is mostafaamine I'm 20 years old I'm Full-Stack Devolper This's My FirstPage 
                You can download my cv and show my progress 
                I inted to gain more experience
            </span>
            <br></br>
            <a href={cv} download="cv" target='_blank'>
            <button className="button-55" href={cv}>Download My CV !</button>
            </a>





        </div>

    </div>
     );
}
 
export default Aboutme;