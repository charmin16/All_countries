import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import RestCountries from './components/RestCountries';
import Header from './components/Header';
import Filter from './components/Filter';
// import Error from './components/Error';
import SingleCountry from './components/SingleCountry';


// import ContextTrial from './contextreducers/ContextTrial';



function App() {

  const [darkMode, setDarkMode] = useState(true)

  const changeMode = () => {
    setDarkMode(!darkMode)
    console.log(darkMode)
  }
  
  return (
    <div className={darkMode ? 'darkkMode' : 'lightMode'}>
      <Router>
        <Header changeMode={changeMode} darkMode={darkMode} />
        {/* <Filter /> */}
        <Routes>
          <Route path='/' element={<RestCountries />} /> 
          {/* <Route path='*' element={<Error />} /> */}
          <Route path='/:name' element={<SingleCountry />} />
        </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
