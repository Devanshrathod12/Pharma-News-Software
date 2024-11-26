<<<<<<< Updated upstream
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import News from './components/News'

const App = () => {
  return (
    <div>
     <Navbar />
     <Home/>
     <News/>
=======
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
