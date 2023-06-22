const ListPopularMovie = (props) => {
  return (
    <div
      className="movie-wrapper"
      key={props.type.id}
      style={{backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}/${props.type.poster_path})`}}>
      <div className="movie-content">
        <div className="movie-title">{props.type.title}</div>
        <div className="movie-date">release: {props.type.release_date}</div>
        <div className="movie-rate">{props.type.vote_average}</div>
      </div>
    </div>
  );
};

export default ListPopularMovie;
