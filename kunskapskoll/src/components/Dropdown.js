
const Dropdown = (props) => {

    function handleOption(e) {
        props.setQuantity(e.target.value)
    }

    function handleOption2(e) {
        props.setGender(e.target.value)
    }


    return (
        <label className="dropdown-form">
            
            <select onChange={handleOption} 
                    value={props.quantity}
                    className="quantity">
                <option value=''></option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>4</option>
            </select>

            <select onChange={handleOption2}
                    value={props.gender}
                    className="gender-select">
                <option value=''></option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Non-binary gender'>Non-binary gender</option>
            </select>

        </label>


    );
}


export default Dropdown;


