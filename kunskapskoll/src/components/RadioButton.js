const RadioButton = (props) => {

    const handleClass = (e) => {
        props.setClassOption(e.target.value)
    }

    return ( 
        
            <form onChange={handleClass}>
                <label>1st Class
                    <input 
                        type="radio" 
                        value="1st Class"
                         
                    />
                </label>
                
                <label>2nd Class
                    <input 
                        type="radio" 
                        value="2nd Class"  
                        
                    />
                </label>
                              
            </form>

    );
}

 
export default RadioButton;