import React from 'react'
import { Link } from 'react-router-dom'
import "./Navstyel.css"


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


function Nav() {
  const toggle=() =>{
    
    if (  document.body.style.backgroundColor = 'white') {
  
      document.body.style.backgroundColor = 'rgba(15, 62, 94, 0.712)'
      
    }
    else {
     
      document.body.style.backgroundColor = 'white';
      
    }
  }

  const togglewhit=()=>{
    if (   document.body.style.backgroundColor = 'rgba(15, 62, 94, 0.712)') {
      document.body.style.backgroundColor = 'white';
      
    }
    else {
     
      document.body.style.backgroundColor = 'white';
      
    }
  }

  
  return (
    <>

<header class="header">

      <nav class="navbar">
        <h2 class="logo"><a href="/"> Weather  <span>App</span> </a></h2>
        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" id="hamburger-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </label>
        <ul class="links">
          <li><a href="/">Home</a></li>
          <li><a href="/weather">Weather</a></li>
          <li> 
          <img onClick={toggle} src='../img/moon.jpg' alt='moonmood' style={{height:'40px',width:"60px"}}>
          </img> <img onClick={togglewhit} src='../img/sun-img.jpg' alt='sunmood' style={{height:'40px'}}></img></li>
         <li>    </li> 
         
        
        </ul>
       
      </nav>
    </header>

   

   

   
    </>
  ) 
}

export default Nav