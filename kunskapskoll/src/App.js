import { useState } from 'react';
import './App.css'
import Input from './components/Input';
import Checkbox from './components/Checkbox'
import Dropdown from './components/Dropdown';



function App() {
  //
  const [inputFirstname, setInputFirstname] = useState('')
  const [inputLastname, setInputLastname] = useState('')
  const [check, setCheck] = useState(false)
  const [gender, setGender] = useState('')
  const [quantity, setQuantity] = useState('')

  return (
    <section className="App">
      <h1>BOOK YOUR TRIP</h1>
      
      
      <Dropdown 
          quantity={quantity}
          setQuantity={setQuantity}
      />
      <Input 
          firstname={inputFirstname} 
          setInputFirstname={setInputFirstname} 
          lastname={inputLastname} 
          setInputLastname={setInputLastname} 
        />
      <Checkbox 
          check={check} 
          setCheck={setCheck} 
      />
      
    </section>
  );
}

export default App;
