import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../utils/auth';
import '../styles/styles.css';

// New Navbar
const NavBar = () => {
  const isLoggedIn = Auth.loggedIn();
<<<<<<< HEAD
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          FitVibe Pro
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>   
      {isLoggedIn ? (
        <>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
               Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
        </>
      ) : (
        <>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            </>
      )}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Help
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Community
                  </a>
                </li>
              </ul>
            </li>
          </ul>
=======
>>>>>>> main

  return (
    <nav>
      <ul className="nav__links">
        <li className="link">
          <a href="/home">Home</a>
        </li>
        <li className="link">
          <a href="#">Program</a>
        </li>
        <li className="link">
          <a href="#">Service</a>
        </li>
        <li className="link">
          <a href="#">About</a>
        </li>
        <li className="link">
          <a href="#">Community</a>
        </li>
        {isLoggedIn ? (
          <>
            <li className="link">
              <a href="/profile">Profile</a>
            </li>
            <li className="link">
              <a href="/" onClick={() => Auth.logout()}>Logout</a>
            </li>
          </>
        ) : (
          <li className="link">
            <a href="/login">Login</a>
          </li>
        )}
      </ul>
      <button className="btn">
        {isLoggedIn ? (
          <a href="/" onClick={() => Auth.logout()}>Logout</a>
        ) : (
          <a href="/Signup">Join Now</a>
        )}
      </button>
    </nav>
  );
};

export default NavBar;


// Original Navbar

// const Navbar = () => {
//   const isLoggedIn = Auth.loggedIn();
//   return (
//     <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           FitVibe Pro
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/home">
//                 Home
//               </a>
//             </li>   
//       {isLoggedIn ? (
//         <>
//             <li className="nav-item">
//               <a className="nav-link" href="/profile">
//                Profile
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/" onClick={() => Auth.logout()}>
//                 Logout
//               </a>
//             </li>
//         </>
//       ) : (
//         <>
//             <li className="nav-item">
//               <a className="nav-link" href="/login">
//                 Login
//               </a>
//             </li>
//             </>
//       )}
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 More
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Help
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Community
//                   </a>
//                 </li>
//               </ul>
//             </li>
//           </ul>

//           <form className="d-flex" role="search">
//             <label htmlFor="search" className="visually-hidden">
//               Search
//             </label>
//             <input
//               id="search"
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-light" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;