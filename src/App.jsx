import { useState } from 'react'
import './App.css'
import Card from './assets/Components/Card'

function App() {
  
  const [animalName, setAnimalName] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [showCard, setShowCard] = useState(false);

  const onChangeAnimalName = (e) => setAnimalName(e.target.value);
  const onChangeAnimalType = (e) => setAnimalType(e.target.value);
  
  // Creo el manjeador para el evento onSubmit
  const onSubmitForm = (e) => {
   e.preventDefault();
   const isAnimalValid = validateAnimal(animalName, animalType);
  
    if (!isAnimalValid) {
    alert("Alguno de los datos ingresados no son correctos");
    } else {
      setShowCard(true);
    
    }
    }

const validateAnimal= (animalName, animalType) => {

  // Elimino espacios en blanco
  const withoutSpaces = animalName.trim(); 
  const withoutSpacesType = animalType.trim();

  // Valido cantidad de caracteres
    if (withoutSpaces.length > 2 && withoutSpacesType.length > 5)
     { 
      return true; 
      }
      else{
        return false; 
    }
    };

    

  return (
    <div className='App'>
      <h1>Carga de mascota</h1>
      <form onSubmit={onSubmitForm}>
        {
          <>
          <input type="text" id='animalName' placeholder='Nombre de mascota' value={animalName} onChange={(e) => setAnimalName(e.target.value.trim())} />
          <input type="text" id='animalType' placeholder='Tipo de mascota' value={animalType} onChange={onChangeAnimalType} />
          </>
        }
        {
          <button type='submit'>Enviar</button>
        }
      </form>
      {showCard && <Card />}
    </div>
  )
}

export default App
