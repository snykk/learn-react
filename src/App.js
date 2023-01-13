import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const TOP_MOVIE_ENDPOINT = "https://imdb-api.com/en/API/Top250Movies/k_k9y6gphy";
const SEARCH_MOVIE_ENDPOINT = "https://imdb-api.com/en/API/SearchSeries/k_k9y6gphy";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    initMovies();
  }, []);

  const initMovies = async () => {
    const response = await fetch(`${TOP_MOVIE_ENDPOINT}`);
    const data = await response.json();
    setMovies(data.items);
  };

  const searchMovies = async (title) => {
    if (title === "") {
      initMovies();
      return;
    }

    const response = await fetch(`${SEARCH_MOVIE_ENDPOINT}/${title}`);
    const data = await response.json();

    setMovies(data.results);
  };

  return (
    <div className="app">
      <h1>Indo XXI</h1>

      <div className="search">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for movies" />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Movie data not found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
