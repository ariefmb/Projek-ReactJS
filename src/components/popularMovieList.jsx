import React, { useState, useEffect } from "react";
import { getMovieList } from "../api";

const PopularMovieList = ({ searchValue }) => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, [searchValue]);

  const ListPopularMovie = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div
          className="movie-wrapper"
          key={i}
          style={{
            backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path})`,
          }}>
          <div className="movie-content">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-date">release: {movie.release_date}</div>
            <div className="movie-rate">{movie.vote_average}</div>
          </div>
        </div>
      );
    });
  };

  return <ListPopularMovie />;
};

export default PopularMovieList;
