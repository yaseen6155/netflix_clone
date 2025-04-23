import React, { useEffect, useState } from 'react';
import { API_KEY } from './constants/constants';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        setMovies(data.results); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMovies(); 
  }, []);

  return (
    <div>
      <h2 className="t">Popular Movies</h2>
      <div className="posters">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: '122px', // Same as .poster width
                height: '170px', // Same as .poster height
                objectFit: 'cover', // To maintain the image ratio
                borderRadius: '4px', // Same as .poster border-radius
                marginRight: '10px', // Same as .poster margin
                transition: 'transform 0.2s', // Same hover transition
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.3)'} // Hover effect: zoom-in on hover
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} // Reset zoom when mouse leaves
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
