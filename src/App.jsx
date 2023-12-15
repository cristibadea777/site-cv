import './App.css';
import Navbar from './components/navbar/Navbar';
import DespreMine from './components/pagini/DespreMine';
import Proiecte from './components/pagini/Proiecte';
import { useState } from 'react';

function App() {

  const [viewDespreMine, setViewDespreMine] = useState(true)
  const [viewProiecte,   setViewProiecte]   = useState(false)

  return (
    <div className="App-container">
      <Navbar 
        setViewDespreMine = {setViewDespreMine}
        setViewProiecte   = {setViewProiecte}
      />
      {viewDespreMine && (
        <DespreMine 
          setViewDespreMine = {setViewDespreMine}
          setViewProiecte   = {setViewProiecte}
        />
      )}
      {viewProiecte && (
        <Proiecte />
      )}
    </div>
  )
}

export default App;
