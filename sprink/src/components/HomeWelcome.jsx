import React from 'react'
import ViewMenu from './ViewMenu';


function HomeWelcome() {
    return (
        <div>

        <div id="welcome">
        
            <p style={{color:'lightpink',fontFamily: 'Chalkduster, fantasy', 
            textShadow: '2px 5px #ff0000', fontWeight:'50',
            fontSize:'5rem' , marginTop : "200px"}}><b>Sprink Says Welcome ...!</b></p>
           
            
            <div style={{display:'flex',
            justifyContent:'center',
            alignItems:'center',flexDirection:'column'}}>
            <ViewMenu/>
            </div>
        </div>
        </div>
    )
}

export default HomeWelcome;
