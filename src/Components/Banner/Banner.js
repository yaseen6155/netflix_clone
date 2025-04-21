import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../../axios'; 
import {API_KEY,imageUrl} from '../../constants/constants';

function Banner() {
  const [movie, setMovie] = useState()
 useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`).then((Response)=>{
        console.log(Response.data.results[0]);
        setMovie(Response.data.results[19])
        
      })
 },[])
  return (
    <div className='banner' style={{
      backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:"loading"})`
      }}>
        <div className="content">
        <h1 className='title'>{movie ? movie.title : 'Loading...'}</h1>
            <div className="buttons">
            <button className='button1'>Play</button>
            <button className='button2'>My List</button>
            </div>
            <h1 className='description'>{movie? movie.overview:"loading"}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner
