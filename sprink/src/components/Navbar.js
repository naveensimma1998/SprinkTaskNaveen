import React from 'react'
import { Link } from 'react-router-dom'
import {useState ,useEffect} from 'react'
import './Navbar.css';
import {Button} from "./navButton";


function Navbar() {

const[click,setClick] = useState(false);
const[button,setButton] =useState(true);

const closeMobileMenu= () => setClick(false);
    
const showButton = () => {
    if(window.innerWidth <=960) {setButton(false)}
    else{setButton(true)}
}

useEffect(() =>{
    showButton()
},[]);

window.addEventListener('resize',showButton);


    return (
        <>
    <nav class="navbar">
      <div class="navbar-container">
      <Link to="/" className='nav-links' onClick={closeMobileMenu}>
             <div style={{border:"2.5px solid rgb(255, 255, 255)", fontWeight: "600", borderRadius: "10px 10px 10px 10px" , backgroundColor : "lightpink"}}>SPRINK WELCOMES YOU</div>
              </Link>
      
      <ul class={click ? 'nav-menu active' : 'nav-menu'}>
          <li class="nav-item">
              
              <Link to="/restaurantInfo" className='nav-links' onClick={closeMobileMenu}>
             <div>RESTAURANT INFO</div>
              </Link>
              
          </li>

          <li class="nav-item">
              <Link to="/categorys" class='nav-links' onClick={closeMobileMenu}>
              <div>CATEGORYS</div>
              </Link>
          </li>


          <li class="nav-item">
              <Link to="/timings" class='nav-links' onClick={closeMobileMenu}>
                  RESTAURANT TIMINGS
              </Link>
          </li>

          <li className="nav-item">
              <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                  SIGN UP
              </Link>
          </li>
      </ul>
      {button && <Button buttonStyle='btn--primary'>SIGN UP</Button>}
      </div>
    </nav>
        </>
    )
}

export default Navbar;
