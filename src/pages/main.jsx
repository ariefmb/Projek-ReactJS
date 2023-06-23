import { getMovieList } from "../api";
import React, { useEffect, useState } from "react";
import PopularMovieList from "../components/popularMovieList";
import NavBar from "../components/navBar";

const MainPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const handleSearch = (result) => {
    setPopularMovies(result)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar OnSearch={handleSearch}/>
        <PopularMovieList popularMovies={popularMovies} />
      </header>

      <footer className="App-footer">
        &copy;2023. <b>Arief Budiman</b>
      </footer>

    </div>
  );
};

export default MainPage;
