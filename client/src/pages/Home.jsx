// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_MATCHUPS, {
//     fetchPolicy: "no-cache"
//   });

//   const matchupList = data?.matchups || [];

//   return (
//     <div className="card bg-white card-rounded w-50">
//       <div className="card-header bg-dark text-center">
//         <h1>Welcome to Tech Matchup!</h1>
//       </div>
//       <div className="card-body m-5">
//         <h2>Here is a list of matchups you can vote on:</h2>
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           <ul className="square">
//             {matchupList.map((matchup) => {
//               return (
//                 <li key={matchup._id}>
//                   <Link to={{ pathname: `/matchup/${matchup._id}` }}>
//                     {matchup.tech1} vs. {matchup.tech2}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         )}
//       </div>
//       <div className="card-footer text-center m-3">
//         <h2>Ready to create a new matchup?</h2>
//         <Link to="/matchup">
//           <button className="btn btn-lg btn-danger">Create Matchup!</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Jumbotron from "../components/Jumbotron";
export default function Home() {
  return (
    <div>
        <h1 className="text-center text-3xl">Welcome to Homepage</h1>
        <Jumbotron />
        <h4>BEST FITNESS IN THE TOWN</h4>
        <h1>MAKE YOUR BODY SHAPE</h1>
      <p>
        Unleash your potential and embark on a journey towards a stronger,
        fitter, and more confident you. Sign up for 'Make Your Body Shape' now
        and witness the incredible transformation your body is capable of!
      </p>
      <a class="btn btn-primary" href="#" role="button">
        Link
      </a>

      <div class="container workouts">
        <h2>Featured Workouts</h2>
        <div class="row"></div>

        <h2>Nutrition Tips</h2>
        <div class="row"></div>

        <h2>Join Our Community</h2>
        <p>
          Connect with like-minded individuals, share your fitness journey, and
          get inspired by others.
        </p>
      </div>
    </div>
  );
}
