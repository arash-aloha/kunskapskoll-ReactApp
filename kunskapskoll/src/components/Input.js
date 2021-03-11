
const Input = (props) => {

    function handleUserInput(e) {
        props.setInputFirstname(e.target.value)
    }
    function handleUserInputL(e) {
        props.setInputLastname(e.target.value)
    }



    return (
            <form className="name-input">

                <input
                    type="text"
                    firstname='First name'
                    value={props.inputFirstname}
                    onChange={handleUserInput}
                    placeholder="First name"
                />

                  
                <input
                    type="text"
                    lastname='Last name'
                    value={props.inputLastname}
                    onChange={handleUserInputL}
                    placeholder="Last name"
                />
             
            </form>
          );
    }

export default Input;


