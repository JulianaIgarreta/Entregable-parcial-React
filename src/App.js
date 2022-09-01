import React from 'react';
import Listado from "./components/Listado";
import Cabecera from "./components/Cabecera";
import { useState } from 'react';

function App() {
  const [elementos , setElementos] = useState(0);


  return (
    <div className="App">
      <Cabecera
        elementos={elementos} 
        />

      <Listado 
        setElementos ={setElementos}
        elementos ={elementos}/>
    </div>
  );
}

export default App;
