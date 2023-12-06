import React from 'react'
import '../styles/styles.css';

const Jumbotron = () => {
  return (
    <header className="section__container header__container">
      <div className="header__content">
        <h4>BEST FITNESS IN THE TOWN</h4>
        <h1><span>MAKE</span> YOUR BODY SHAPE</h1>
        <p>
          Unleash your potential and embark on a journey towards a stronger,
          fitter, and more confident you. Sign up for 'Make Your Body Shape' now
          and witness the incredible transformation your body is capable of!
        </p>
        <button className="btn"><a href="/Signup">Get Started</a></button>
      </div>
    </header>
  );
};


export default Jumbotron;

// Old jumbotron

// export default function Jumbotron() {
//   return (
//     <div>
//     <div className="jumbotron text-center">
//     <h1 className="display-4">Your Fitness Journey Starts Here!</h1>
//     <p className="lead">Achieve your fitness goals with FitVibe Pro. Explore personalized workouts, nutrition plans, and join a supportive community.</p>
// </div>
// <img src="https://steelfitusa.com/cdn/shop/articles/The-Difference-Between-Sculpting-Male-Abs-vs.-Female-Abs.jpg?v=1660142801&width=1500" 
// alt="Workout"/>
// </div>
//   )
// }