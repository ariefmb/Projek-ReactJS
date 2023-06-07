import "./style/App.css";
import { getMovieList, searchMovie } from "./api";
import React, { useState, useEffect } from "react";
import NavBar from "./components/navBar";
import PopularMovieList from "./components/popularMovieList";

const App = () => {
  const [searchValue, setSearchValue] = useState([]);

  const handleInputChange = (value) => {
    setSearchValue(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* NavBar */}
        <div className="navigate">
          <div className="nav">
            <NavBar onInputChange={handleInputChange}/>
          </div>
        </div>
        {/* <input 
        placeholder="cari film..." 
        className="movie-search"
        onChange={({target}) => search(target.value)} 
        /> */}
        <div className="type">
          <h1 id="popular">POPULAR</h1>
          <h3>see all</h3>
        </div>
        <div className="movie-container">
          <PopularMovieList searchValue={searchValue}/>
        </div>
      </header>

      <footer className="App-footer">
        &copy;2023. <b>Arief Budiman</b>
      </footer>
    </div>
  );
};

export default App;
