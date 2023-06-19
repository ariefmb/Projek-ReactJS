import "./style/App.css";
import { getMovieList, searchMovie } from "./api";
import React, { useState } from "react";
// import NavBar from "./components/navBar";
import PopularMovieList from "./components/popularMovieList";
import MyPict from "./assets/profile/myPict.png";

const App = () => {
  const [searchValue, setSearchValue] = useState([]);

  // const handleInputChange = (value) => {
  //   setSearchValue(value);
  // };

  const handleInputChange = async (event) => {
    if (event.length > 3) {
      const query = await searchMovie(event);
      console.log({query: query})
      setSearchValue(query.results)
    }
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      console.log({ query: query });
      setSearchValue(query.results);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* NavBar */}
        <div className="navigate">
          <div className="nav-wrapper">
            <div className="logo">
              <a href="/">
                <p>CINEMA</p>
              </a>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <a href="#">GENRE</a>
                </li>
                <li>
                  <a href="#popular">POPULAR</a>
                </li>
              </ul>
            </div>
            <div className="search">
              <input
                type="text"
                placeholder="Search..."
                id="search_input"
                autoComplete="off"
                onChange={({target}) => handleInputChange(target.value)}
              />
            </div>
            <div className="img_profile">
              <a href="#">
                <img src={MyPict} alt="" />
              </a>
            </div>
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
          <PopularMovieList searchValue={searchValue} />
        </div>
      </header>

      <footer className="App-footer">
        &copy;2023. <b>Arief Budiman</b>
      </footer>
    </div>
  );
};

export default App;
