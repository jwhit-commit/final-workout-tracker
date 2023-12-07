import React from 'react';
import '../styles/styles.css';

const Body = () => {
  return (
    <div>
      {/* Join Section */}
      <section className="section__container join__container">
        <h2 className="section__header">WHY JOIN US ?</h2>
        <p className="section__subheader">
          Our diverse membership base creates a friendly and supportive
          atmosphere, where you can make friends and stay motivated.
        </p>
        <div className="join__card">
          <span><i className="ri-user-star-fill"></i></span>
          <div className="join__card__content">
            <h4>Personal Trainer</h4>
            <p>Unlock your potential with our expert Personal Trainers.</p>
          </div>
        </div>
        <div className="join__card">
          <span><i className="ri-vidicon-fill"></i></span>
          <div className="join__card__content">
            <h4>Practice Sessions</h4>
            <p>Elevate your fitness with practice sessions.</p>
          </div>
        </div>
        <div className="join__card">
          <span><i className="ri-building-line"></i></span>
          <div className="join__card__content">
            <h4>Good Management</h4>
            <p>Supportive management, for your fitness success.</p>
          </div>
        </div>
      </section>

      {/* Member Review Section */}
      <section className="review">
        <div className="section__container review__container">
          <span><i className="ri-double-quotes-r"></i></span>
          <div className="review__content">
            <h4>MEMBER REVIEW</h4>
            <p>
              What truly sets this gym apart is their expert team of trainers. The
              trainers are knowledgeable, approachable, and genuinely invested in
              helping members achieve their fitness goals. They take the time to
              understand individual needs and create personalized workout plans,
              ensuring maximum results and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="section__container footer__container">
        <p>
          Take the first step towards a healthier, stronger you with our
          unbeatable pricing plans. Let's sweat, achieve, and conquer together!
        </p>
        <div className="footer__col">
          <h4>Contact Us</h4>
          <a href="https://github.com/Peaky00">Christopher Kirkley</a>
          <a href="https://github.com/taycannon">Taylor Cannon</a>
          <a href="https://github.com/jwhit-commit">Joshua Whit</a>
          <a href="https://github.com/dsullivan42">Daniel Sullivan</a>
        </div>
      </footer>

      {/* Footer Bar */}
      <div className="footer__bar">
        <p>&copy; 2023 FitVibe. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Body;

