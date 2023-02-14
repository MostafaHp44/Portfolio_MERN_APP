import './ContactUs.css'
import { useEffect,useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const ContactUs = () => {

  const [fullname,setfullname]=useState('')
  const [subject,setsubject]=useState('')
  const [email,setemail]=useState('')
  const [massage,setmassage]=useState('')


    

  async function handelsubmit(e) {
		e.preventDefault()
    if(fullname||subject||email||massage)
    {
      try 
      {
        await axios.post("http://localhost:4000/post", {
          FullName:fullname,
          Email:email,
          Subject:subject,
          Massage:massage
        }).then(()=>{ 
          toast.success("Thnak's You Form is Send")
          setTimeout(function(){
            window.location.reload();
            window.scrollTo(0, 0);
         }, 8000);
         
      })
      }
      catch (error) 
      {
        console.error(error)
      }
    }
    else
  {
    toast.error('Enter The Data')
	}

      }
  
  
  useEffect(() => {
    document.body.className==='dark'
    ? <><h2  style={{color: '#fff'}}></h2></>
    : <><h2  style={{color: '#242D49'}}></h2></>

            }, []);
    return (

<div className="BigForm" id='ContactUs'>

  <div className='frame'>

  <div className='textform'>
<h2>Get in Touch</h2>
<h1> Contact me</h1>
</div>

<div className='form'>

<div className='form1'>
<form method="post" action="/" >
  <input type='text' placeholder='FullName' className='text' name='FullName'  value={fullname} onChange={(e)=>{setfullname(e.target.value)}} />
  <input type='text' placeholder='YourMail' className='text'name='Email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
  <input type='text' placeholder='Subject' className='text' name='Subject' value={subject} onChange={(e)=>{setsubject(e.target.value)}} />
  <textarea type='text' placeholder='Your Massage' className='text' name='Massage' value={massage} onChange={(e)=>{setmassage(e.target.value)}} />
  <button className="button-80"  onClick={handelsubmit}>Send Now</button>

</form>
</div>


</div>
<ToastContainer/>
</div>



</div> 

    );
}
 
export default ContactUs;
