import React from 'react'
import './ViewMenu.css'
function ViewMenu() {
    const handleViewMenu=()=>{
        document.getElementById('menu-items').style.display='block';
        document.getElementById('welcome').style.display='none';
    }
    return (
        <div style={{transform: 'translate(0px, -35px)'}}>
            
            
            <button onClick={handleViewMenu} style={{color: 'Black', fontWeight:'800' , marginTop : "80px"}}>
               View Menu
            </button>
            
        </div>
     
    )
}

export default ViewMenu
