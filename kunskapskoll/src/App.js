import { useState } from 'react';
import './App.css'
import Input from './components/Input';
import Checkbox from './components/Checkbox'
import Dropdown from './components/Dropdown';
import Button from './components/Button';
import RadioButton from './components/RadioButton'
import Destinations from './components/Destinations';


function App() {

  const [departure, setDeparture] = useState('')
  const [destination, setDestination] = useState('')
  const [inputFirstname, setInputFirstname] = useState('')
  const [inputLastname, setInputLastname] = useState('')
  const [check, setCheck] = useState(false)
  const [gender, setGender] = useState('')
  const [quantity, setQuantity] = useState('')
  const [confirm, setConfirm] = useState(false)
  const [classOption, setClassOption] = useState('')



  return (
    <section className="App">
      <h1>BOOK YOUR TRIP</h1>
      
      <Destinations
          destination={destination}
          departure={departure}
          setDeparture={setDeparture}
          setDestination={setDestination}
      />

      <RadioButton 
          classOptionDefault={classOption}
          setClassOption={setClassOption}
      />
      <Dropdown 
          quantity={quantity}
          setQuantity={setQuantity}
          gender={gender}
          setGender={setGender}
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
      <Button 
          confirm={confirm}
          setConfirm={setConfirm}
      />
      
    </section>
  );
}

export default App;
