
const Input = () => {
    return(
        <form className="form-container">
            <select className="dropdown">
                <option label="Mr" /> 
                <option label="Mrs"></option> 
                <option label="awdawd"></option> 
            </select>

            <select className="dropdown">
                <option label="1"></option> 
                <option label="2"></option> 
                <option label="3"></option> 
            </select>
            
            <div className="input-container">
                <input type = "text" placeholder="First name"/>
                <input type = "text" placeholder="Last name" /> 
            </div>
            <input type="checkbox" />
        </form>
    )
}

export default Input;

