import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from './components/Select';
import Input from './components/Input';
import Meme from './components/Meme';


function App() {
  const [linea1, setLinea1] = useState('Hola mundo 1');
  const [linea2, setLinea2] = useState('Hola mundo 2');
  const [selectedValue, setSelectedValue] = useState('fire')
  const [exportar, setExportar] = useState(false)
 
  return (
    <div className="App container">
      <h1>Meme Generator</h1>
      <div className="row d-flex justify-content-center mt-3 mb-3 me-2">
        <Select setSelectedValue={setSelectedValue}/>
      </div>
      <div className="row d-flex justify-content-center input-group mb-3">
        <Input setLinea={setLinea1} placeholder="Insertar texto arriba..."/>
      </div>
      <div className="row d-flex justify-content-center input-group mb-3">
        <Input setLinea={setLinea2} placeholder="Insertar texto abajo..."/>

      </div>
      <button onClick={() => setExportar(true)} className="btn btn-primary btn-lg mb-2">Export</button><br/>
      <Meme linea1={linea1} linea2={linea2} imagen={selectedValue} exportar={exportar} setExportar={setExportar}/>  
      
      
      
      
      
      

    </div>
  );
}

export default App;
