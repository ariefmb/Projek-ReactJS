import "../style/main.css";
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
    <div className="Main">
      <header className="Main-header">
        <NavBar OnSearch={handleSearch}/>
        <PopularMovieList popularMovies={popularMovies} />
      </header>

      <footer className="Main-footer">
        &copy;2023. <b>Arief Budiman</b>
      </footer>

    </div>
  );
};

export default MainPage;
