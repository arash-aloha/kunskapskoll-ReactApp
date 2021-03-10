import React, { Component } from 'react';


class Dropdown extends Component {
    constructor(props) {
        super(props)

        this.state = {
             quantity: [
                ''
            ],

            gender: [
                ''
            ],

            
        }
    }
    
    userChioceQuantity = (e) => {     
        this.setState({
            quantity: e.target.value
        })
    }

    userChoiceGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

   
    render() {

          return ( 
            
            <label className="dropdown-form"> 
                <select onChange={this.userChioceQuantity} className="quantity">
                    <option value=''></option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>4</option>
                </select>
                <select onChange={this.userChoiceGender} className="gender-select">
                   <option value=''></option>
                   <option value='Male'>Male</option>
                   <option value='Female'>Female</option>
                   <option value='Non-binary gender'>Non-binary gender</option>
               </select>

            </label>

            
         );
    }
}
 
export default Dropdown;

//{this.state.gender.map((element, index) => <option key={index}>{element}</option>)}
//{this.state.quantity.map((element, index) => <option value={index+=1} key={index}>{element}</option> )}