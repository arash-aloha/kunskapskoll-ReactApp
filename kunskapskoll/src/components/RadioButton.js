const RadioButton = (props) => {

    const handleClass = (e) => {
        props.setClassOption(e.target.checked)
    }

    return ( 
        
            <form onChange={handleClass}>
                1st Class
                    <input 
                        type="radio" 
                        value="1st Class"
                        checked={props.ClassOption === "1st Class"} 
                    
                    />
                
                
                2nd Class
                    <input 
                        type="radio" 
                        value="2nd Class"  
                        checked={props.setClassOption === "2nd Class"}
                        
                    />
            </form>

    );
}

 
export default RadioButton;