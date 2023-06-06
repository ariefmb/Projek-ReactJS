import { useEffect } from "react";
import Search from "../search";
import { popularMovies, setPopularMovies } from "../hook";
import { getMovieList } from "../api";

const ListPopularMovie = (props) => {
  return (
    <div className="movie-wrapper" key={props.key}>
      <div className="movie-title">{props.type.title}</div>
      <img
        className="movie-img"
        src={`${process.env.REACT_APP_BASEIMGURL}/${props.type.poster_path}`}
      />
      <div className="movie-date">release: {props.type.release_date}</div>
      <div className="movie-rate">{props.type.vote_average}</div>
    </div>
  );
};

export default ListPopularMovie;
