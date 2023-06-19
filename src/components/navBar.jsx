// import MyPict from "../assets/profile/myPict.png";
// import React, { useState } from "react";
// import { searchMovie } from "../api";

// const NavBar = ({ onInputChange }) => {
//   const [inputValue, setInputValue] = useState([]);

//   // const handleInputChange = (event) => {
//   //   console.log(event)
//   //   setInputValue(event.result);
//   //   onInputChange(event.result);
//   // };

//   const search = async (q) => {
//     if (q.length > 3) {
//       const query = await searchMovie(q)
//       console.log({query: query})
//       // setInputValue(query.results)
//       onInputChange(query.results)
//     }
//   }

//   return (
//     <div className="nav-wrapper">
//       <div className="logo">
//         <a href="/">
//           <p>CINEMA</p>
//         </a>
//       </div>
//       <div className="menu">
//         <ul>
//           <li>
//             <a href="#">GENRE</a>
//           </li>
//           <li>
//             <a href="#popular">POPULAR</a>
//           </li>
//         </ul>
//       </div>
//       <div className="search">
//         <input
//           type="text"
//           placeholder="Search..."
//           id="search_input"
//           // value={inputValue}
//           onChange={({target}) => search(target.value)}
//         />
//       </div>
//       <div className="img_profile">
//         <a href="#">
//           <img src={MyPict} alt="" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
