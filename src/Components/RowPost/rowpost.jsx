import React, { useEffect, useState } from 'react'
import './rowpost.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'

function RowPost(props) {
  const[movies,setMovies]=useState([])
  useEffect(() => {
  axios.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`).then(Response=>{
    console.log(Response.data);
    setMovies(Response.data.results)
  })
  }, [])
  
  return (
    <div className='row1'>
      <h2 className='t'>{props.title}</h2>
      <div className={props.isSmall?"smallposter":"posters"}>
        {movies.map((obj)=>(

        
        <img src={`${imageUrl+obj.backdrop_path}`} alt="poster" className={props.isSmall?"smallposter":"posters"}/>
        ))}
        
      </div>
    </div>
    
  )
}

export default RowPost
