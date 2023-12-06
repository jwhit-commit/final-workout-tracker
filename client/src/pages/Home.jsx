import React from "react";
import Jumbotron from "../components/Jumbotron";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <section className="section__container explore__container">
        <div className="explore__header">
          <h2 className="section__header">EXPLORE OUR PROGRAM</h2>
          <div className="explore__nav">
            <span><i className="ri-arrow-left-line"></i></span>
            <span><i className="ri-arrow-right-line"></i></span>
          </div>
        </div>
        <div className="explore__grid">
          <ExploreCard icon="ri-boxing-fill" title="Strength" description="Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional." />
          <ExploreCard icon="ri-heart-pulse-fill" title="Physical Fitness" description="It encompasses a range of activities that improve health, strength, flexibility, and overall well-being." />
          <ExploreCard icon="ri-run-line" title="Fat Loss" description="Through a combination of workout routines and expert guidance, we'll empower you to reach your goals." />
          <ExploreCard icon="ri-shopping-basket-fill" title="Weight Gain" description="Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner." />
        </div>
      </section>
    </div>
  );
};

const ExploreCard = ({ icon, title, description }) => {
  return (
    <div className="explore__card">
      <span><i className={icon}></i></span>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
    </div>
  );
};

export default Home;


// Old Home

// export default function Home() {
//   return (
//     <div>
//         <h1 className="text-center text-3xl">Welcome to Homepage</h1>
//         <Jumbotron />
//         <h4>BEST FITNESS IN THE TOWN</h4>
//         <h1>MAKE YOUR BODY SHAPE</h1>
//       <p>
//         Unleash your potential and embark on a journey towards a stronger,
//         fitter, and more confident you. Sign up for 'Make Your Body Shape' now
//         and witness the incredible transformation your body is capable of!
//       </p>
//       <a class="btn btn-primary" href="#" role="button">
//         Link
//       </a>

//       <div class="container workouts">
//         <h2>Featured Workouts</h2>
//         <div class="row"></div>

//         <h2>Nutrition Tips</h2>
//         <div class="row"></div>

//         <h2>Join Our Community</h2>
//         <p>
//           Connect with like-minded individuals, share your fitness journey, and
//           get inspired by others.
//         </p>
//       </div>
//     </div>
//   );
// }