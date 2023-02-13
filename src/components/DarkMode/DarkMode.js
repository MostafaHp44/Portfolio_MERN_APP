import './DarkMode.css'
import { useState ,useEffect} from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const DarkMode = () => {
const [theme, setTheme] = useState('light');

const ToggelTheme=()=>{
    if (theme==='light')
    {
        setTheme('dark')
    }
    else
    {
        setTheme('light')
    }
};
useEffect(() => {
document.body.className=theme 
}, [theme]);
    return ( 
<div className={`App ${theme}`}>


<div className='stylebtn'>

<button onClick={ToggelTheme} className='btn'>
<BootstrapSwitchButton
 checked={true} 
 onstyle="primary"
 offstyle="info"
 onlabel='off'
 offlabel='on'
  />
  </button> 

</div>

  
</div>


    );
}
 
export default DarkMode;