import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './app.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/rowpost'



function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
