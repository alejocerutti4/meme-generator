import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from './components/Select';
import Input from './components/Input';
import Meme from './components/Meme';
import Form from './components/Form';


function App() {
  const [linea1, setLinea1] = useState('Hola mundo 1');
  const [linea2, setLinea2] = useState('Hola mundo 2');
  const [selectedValue, setSelectedValue] = useState('fire')
  const [exportar, setExportar] = useState(false)
 
  return (
    <div className="App container">
      <h1>Meme Generator</h1>
      <Form setSelectedValue={setSelectedValue} setLinea1={setLinea1} setLinea2={setLinea2}></Form>
      <button onClick={() => setExportar(true)} className="btn btn-primary btn-lg mb-2">Export</button><br/>
      <Meme linea1={linea1} linea2={linea2} imagen={selectedValue} exportar={exportar} setExportar={setExportar}/>  
      
      
      
      
      
      

    </div>
  );
}

export default App;
