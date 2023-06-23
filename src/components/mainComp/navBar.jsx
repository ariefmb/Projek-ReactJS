import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchMovie } from "../../api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MyPict from "../../assets/profile/myPict.jpg"

const NavBar = ({ OnSearch }) => {
    const [query, setQUery] = useState("")

    const handleSearch = async () => {
        if(query.length > 3) {
            const result = await searchMovie(query)
            OnSearch(result.results)
        }
    }

    return (
        <div className="navigate">
            <div className="nav-wrapper">
              <div className="logo"><a href="/"><p>CINEMA</p></a></div>
              <div className="menu">
                <ul><li><a href="#popular">POPULAR</a></li></ul>
              </div>
              <div className="search">
                <input 
                type="text" 
                placeholder="Search..." 
                className="input-with-icon" 
                autoComplete="off"
                value={query}
                onChange={({ target }) => setQUery(target.value)}
                onBlur={handleSearch} />
                <FontAwesomeIcon icon={faSearch} className="input-icon"/>
              </div>
              <div className="img_profile">
                  <Link to="/profile"><img src={MyPict} alt="profile" /></Link>
              </div>
            </div>
        </div>
    )
}

export default NavBar;