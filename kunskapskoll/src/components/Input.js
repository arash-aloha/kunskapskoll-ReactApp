const Input = (props) => {
    return (
        <input type="text" value={props.value} onChange={props.userInput} />
    );
}

export default Input;