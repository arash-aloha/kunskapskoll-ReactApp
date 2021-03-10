import React from 'react'
import Dropdown from './Dropdown';
import Input from './Input'

class FormAndInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            gender: false,
            isChecked: false,
            quantity: '',
            userInput: ''
        }
    }

    handleSubmit = (e) => {
    e.preventDefault();
    console.log('preventdefault - works');
    }



    render() {


        return (
        <div className="form-container">
            <form onSubmit={this.handleSubmit}>

                <fieldset>
                    <label className="dropdown-options">
                        <Dropdown />    
                    </label>

                    <label className="namesField">
                        <Input />
                    </label>

                </fieldset>


            </form>
            

               
            
        
        </div>
        
        )
    }
}

export default FormAndInput