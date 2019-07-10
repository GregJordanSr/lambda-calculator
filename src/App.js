import React, { useState } from "react";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Display from './components/DisplayComponents/Display';
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [useDisplay, setDisplay] = useState('');

  const displayContent = (btn) => {
    setDisplay(useDisplay + btn ) 
  }
 
 
  return (
    <div className="container">
      <Logo />
      <div className="App">
          <div className="display">
            <Display displayProps={useDisplay}/>
          </div>
          <div className="special-characters-buttons">
            <Specials displayContent={displayContent} />
          </div>
          <div className="numbers-buttons">
            <Numbers displayContent={displayContent} />
          </div>
          <div className="operator-buttons">
            <Operators displayContent={displayContent}/>
          </div>
      </div>
    </div>
  );
}

export default App;
