import React, { useState, useEffect } from "react";
import { getMovieList } from "../api";

const PopularMovieList = ({ searchValue }) => {
  const [searchValue, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, [searchValue]);

  const ListPopularMovie = () => {
    return searchValue.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img
            className="movie-img"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="movie-date">release: {movie.release_date}</div>
          <div className="movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  return <ListPopularMovie />;
};

export default PopularMovieList;
