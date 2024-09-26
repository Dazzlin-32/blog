
import { useState } from 'react';
import Home from './Components/Home';
import Footer from './Components/Footer';

import { Outlet } from "react-router-dom";

function App() {
  const [isLogged, setIsLogged] = useState(false)
  
  return (
    <div className="App">
      <Outlet  context={[isLogged,setIsLogged]}/>
      <Footer/>
    </div>
  );
}

export default App;
