import React, {useEffect, useState} from 'react';
import './App.css';
import {ScrollBreeds} from "./pages";
import {useAnimation, motion} from "framer-motion";

type BreedInfo = {
  name: string,
  description: string
}

function App() {
  const controls = useAnimation();
  const [ breeds,setBreeds] = useState<BreedInfo>()




  const handleTextDisplay = (breed: BreedInfo) => {
    setBreeds(breed)
    if (breed.name) {
      controls.start({ y: 0, x: -500, opacity: 1 });
    } else {
      controls.start({ y: 200, x: -500, opacity: 1 })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <motion.div
            className="text-container"
            initial={{ y: 300, x: -500, opacity: 1 }}
            animate={controls}
            transition={{ duration: 1.5 }}
        >
          {breeds?.name}
        </motion.div>
        <motion.div
            style={{width: 770, marginTop: '20px'}}
            initial={{ y: 250, x: -500, opacity: 1 }}
            animate={controls}
            transition={{ duration: 2.5 }}
        >
          {breeds?.description}
        </motion.div>
        <ScrollBreeds handleTextDisplay={handleTextDisplay}/>

      </header>
    </div>
  );
}

export default App;
