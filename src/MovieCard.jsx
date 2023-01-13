import React from "react";

const MovieCard = ({ movie: movie }) => {
  return (
    <div className="movie" key={movie.id}>
      <div>
        <p>{movie.year}</p>
      </div>

      <div>
        <img src={movie.image !== "" ? movie.image : "https://via.placeholder.com/400"} alt={movie.title} />
      </div>

      <div>
        <span>{movie.imDbRating ? movie.imDbRating : movie.resultType}</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
