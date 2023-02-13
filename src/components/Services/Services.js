import './Services.css'
import { useEffect} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const Services = () => {
    useEffect(() => {
        document.body.className==='dark'
        ? <><div className="c1" style={{borderColor:' #fff'}}></div>
            <div className="c2" style={{borderColor:' #fff'}}></div>
            <div className="c3" style={{borderColor:' #fff'}}></div>
            <div className="c4" style={{borderColor:' #fff'}}></div>
            <h1 style={{color:"#fff"}}></h1></>

        :<><div className="c1" style={{borderColor:' #4169E1  '}}></div>
           <div className="c2" style={{borderColor:' #4169E1  '}}></div>
           <div className="c3" style={{borderColor:' #4169E1  '}}></div>
           <div className="c4" style={{borderColor:' #4169E1  '}}></div></>
}, []);
    return (
    <section className="allservices" id='Services'>

<section className="Cards-Left">

    <div className="c1">
<h1> Desing Web Page</h1>
<p>
we Desing any web page you need it and very simple 
you must to send me all requrment and i will give you a deadline to finish it 
</p>
    </div>

    <div className="c3">
<h1> Back-End  Web Devolpment</h1>
<p>
Data and othe side is our responsibilities and we must to secure it and control it 
just trust and evey thin is will be ok   
</p>
    </div>

    </section>


    <section className='Cards-Right'>

    <div className="c2">
<h1> Front-End Web Development</h1>
<p>
We can make a style Page With style color and easy to use 
you can imagine your Desing and send it ,then we build it  
</p>
    </div>
    

<div className="c4">
<h1> 
    Full Support
</h1>
<p>
we Provided you support 24/7 
we you need thing dont do not hesitate and call now 
</p>
    </div>

    </section>

    


</section>


);
}
 
export default Services ;