import React, { useEffect } from 'react'
import './Banner.css';
import axios from 'axios';  
import { API_KEY } from '../../constants/constands';

function Banner() {
 useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`)
  .then((Response)=>{
        console.log(Response.data);
        
      })
 },[])
  return (
    <div className='banner'>
        <div className="content">
            <h1 className='title'>ORIGINALS</h1>
            <div className="buttons">
            <button className='button1'>Play</button>
            <button className='button2'>My List</button>
            </div>
            <h1 className='description'>NETFLIX is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner
