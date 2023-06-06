import "./style/App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";
import ListPopularMovie from "./components/popularMovieList";
import NavBar from "./components/navBar";
// import Search from "./search";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return <ListPopularMovie type={movie} key={i} />;
    });
  };

  const Search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.result);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* NavBar */}
        <div className="navigate">
          <div className="nav">
            <NavBar />
            <div className="search">
              <input type="text" placeholder="Search..." id="search_input"
              onChange={({target}) => Search(target.value)} />
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
