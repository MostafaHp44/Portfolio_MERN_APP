import './Bio.css'
import React ,{ useEffect}from 'react'
import m from './2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


const Bio = () => {
    useEffect(() => {
        document.body.className==='dark'
        ? <><span style={{color: '#fff'}}> Hi , Every one  </span></>
        : <><span style={{color: '#242D49'}}> Hi , Every one  </span></>
                }, []);
    return ( 
    <div className="BigBio">

        <div className='bio-left'>

        <div className="biotext">
        <span > Hi , Every one  </span>
        <span> I'm Mostafa HP </span>
        </div>
   <button className="button-52" > Hire Me</button>


      <div className='icons'>
          <a href='https://github.com/MostafaHp44'><FontAwesomeIcon icon="fa-brands fa-github" /></a>  
          <a href='https://www.linkedin.com/in/mostafa-hp-125248119/'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
          <a href=''><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
         
          </div>
        </div>


        <div className='bio-right'>

         <div className='biopic'>
            
         <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" >
    <mask id="mask0" mask-type="alpha">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
    </mask>
    <g mask="url(#mask0)">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
        <image href={m} className='pic' x='0' y='0'/>
    </g>
</svg>

         </div>
       
        </div>

        

    </div>
     );
}
 
export default Bio;