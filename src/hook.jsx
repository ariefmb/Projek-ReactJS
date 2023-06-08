// import { getMovieList } from "./api";
// import { useState, useEffect } from "react";
// import ListPopularMovie from "./components/popularMovieList";

// export Hooks = () => {
//     const [popularMovie, setPopularMovies] = useState([])
//     return [popularMovie, setPopularMovies];
// };

// export const PopularMovieList = () => {
//     <Hooks />
//   useEffect(() => {
//     getMovieList().then((result) => {
//       setPopularMovies(result);
//     });
//   }, []);

//   return popularMovies.map((movie, i) => {
//     return <ListPopularMovie type={movie} key={i} />;
//   });
// };