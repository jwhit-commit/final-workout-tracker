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
