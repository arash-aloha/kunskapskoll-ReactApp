const Button = (props) => {

    function confirmClick (e) { 
        props.setConfirm(e.target.value)
    }
    
    return ( 
        <input 
            type="button" 
            value="Confirm Booking" 
            onChange={confirmClick}
        />
     );
}
 
export default Button;