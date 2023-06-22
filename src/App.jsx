import "./style/App.css";
import { getMovieList, searchMovie } from "./api";
import React, { useEffect, useState } from "react";
import ProfilePage from "./pages/profile";
import ListPopularMovie from "./components/popularMovieList";
import MyPict from "./assets/profile/myPict.png";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie) => {
      return (
        <ListPopularMovie type={movie} />
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      console.log({ query: query });
      setPopularMovies(query.results);
    }
  };

  return (
    <div className="App">
      <header className="App-header">

        <div className="navigate">
          <div className="nav-wrapper">
            <div className="logo"><a href="/"><p>CINEMA</p></a></div>
            <div className="menu">
              <ul><li><a href="#popular">POPULAR</a></li></ul>
            </div>
            <div className="search">
              <input type="text" placeholder="Search..." id="search_input" autoComplete="off"
              onChange={({ target }) => search(target.value)} />
            </div>
            <div className="img_profile">
              <a href={<ProfilePage />} target="_blank"><img src={MyPict} alt="" /></a>
            </div>
          </div>
        </div>

        <div className="type">
          <h1 id="popular">POPULAR</h1>
        </div>

        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>

      <footer className="App-footer">
        &copy;2023. <b>Arief Budiman</b>
      </footer>
    </div>
  );
};

export default App;
