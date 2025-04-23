import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './app.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/rowpost'
import { action, originals } from './urls'
import MovieList from './MovieList'; 
import MovieModal from './Components/MovieModel/MovieModel';



function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <MovieList/>
      <MovieModal/>
    </div>
)}

export default App;
