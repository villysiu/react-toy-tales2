import React, { useState } from 'react' 

import Header from './components/Header'
import ToyContainer from './components/ToyContainer'
import ToyForm from './components/ToyForm'
import './App.css'
const App=()=>{
  
  

  const [display, setDisplay] = useState(false)
  const handleClick = () =>{
    
    setDisplay(!display)
   
  }
  return (
    <>
   
        <Header />
        { console.log(display)}
        { display ? <ToyForm/>  : null }
        <div className="buttonContainer">
          <button onClick={handleClick}> Add a Toy </button>
        </div> 

        <ToyContainer />
    </>

  );
}

export default App;
