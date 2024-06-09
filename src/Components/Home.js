import React from 'react'
import "./Homestyle.css"



function Home() {
  return (
 <>
 <div className="contenar">
 <div className='main_header_left'>
 <p>Welcome to Weather app</p>
 <h1>Get The Latest <span class="text-color">Weather</span> Info Of Your City</h1>
 <a href="/weather"><button>Chech Now</button></a>


 </div>

<div className='main_header_right'>

<div className='right1'>
<img src="./img/Weather_app_.png" alt="" /> 
</div>

<div className='right2'>
  <img src="./img/Weather_re_qsmd.png" alt="" />
</div>



</div>
 </div>





 </>
  )
}

export default Home