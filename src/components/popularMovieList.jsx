const PopularMovieList = (movie) => {
  return (
    <div
      className="movie-wrapper"
      key={movie.id}
      style={{
        backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path})`,
      }}
    >
      <div className="movie-content">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-date">release: {movie.release_date}</div>
        <div className="movie-rate">{movie.vote_average}</div>
      </div>
    </div>
  );
};

export default PopularMovieList;
