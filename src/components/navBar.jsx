import React, { useState } from "react";
import { searchMovie } from "../api";
import MyPict from "../assets/profile/myPict.png"

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
                id="search_inputgakepake" 
                autoComplete="off"
                value={query}
                onChange={({ target }) => setQUery(target.value)}
                onBlur={handleSearch} />
              </div>
              <div className="img_profile">
                  <img src={MyPict} alt="" />
              </div>
            </div>
        </div>
    )
}

export default NavBar;