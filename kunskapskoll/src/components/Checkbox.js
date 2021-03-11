const Checkbox = (props) => {

    function handleCheckbox (e) {
        props.setCheck(e.target.checked)
    }

    return ( 
        <form className="checkbox">
            <input 
                type="checkbox" 
                checked={props.check} 
                onChange={handleCheckbox}
            />
        </form>
     );
}
 
export default Checkbox;