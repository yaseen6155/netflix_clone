import React from 'react';
import './MovieModel.css';

function MovieModal({ movie, onClose, onPlay }) {
  if (!movie) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <img
          className="modal-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className="modal-info">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
          <button className="play-btn" onClick={onPlay}>▶ Play Trailer</button>
          <button className="close-btn" onClick={onClose}>❌ Close</button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
