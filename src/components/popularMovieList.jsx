const PopularMovieList = (props) => {
  return (
    <div
      className="movie-wrapper"
      key={props.id}
      style={{backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}/${props.poster_path})`}}>
      <div className="movie-content">
        <div className="movie-title">{props.title}</div>
        <div className="movie-date">release: {props.release_date}</div>
        <div className="movie-rate">{props.vote_average}</div>
      </div>
    </div>
  );
};

export default PopularMovieList;
