import React from 'react';
import axios from 'axios';
import './Items.css'



 class Details extends React.Component {
    _isMounted=false;
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
      }

  componentDidMount() {
    this._isMounted = true;
    axios.get(`https://jsonblob.com/api/4e6e6a57-eb72-11eb-9eff-b5f91494da60`)
    .then(response =>{
        console.log(response.data.categorys)
        this.setState({
            data : response.data.categorys
        })
    })
    .catch(err=>console.log("err"))
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  handleBack=()=>{
    document.getElementById('welcome').style.display='block';
    document.getElementById('menu-items').style.display='none';
    
  }

  render() {
    
    return (
      <div id="menu-items">
        <button onClick={this.handleBack}>Back</button>
        <div className="listMain">
        { this.state.data.map((categoryItem,index) => {

          return(
            <div className="list">
          
              <span className="categoryItems"><h4 style ={ {fontFamily : "Chalkduster, fantasy" , fontSize : "28px" , color : "goldenrod"
            , fontWeight : "90"}}>{categoryItem.name + ":" }  </h4>
             
            <ul style={{backgroundColor :"lightslategray" , color : "black"}}>
            {categoryItem['menu-items'].map((subList,index)=> 
              <option key={index}>
                {subList.name}
              </option>
            )}
            </ul>
           
            </span>
            
            </div>

          )
        }
        )}
        </div>
      </div>
    )
  }
}

export default Details