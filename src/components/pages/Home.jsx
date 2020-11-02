import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Trivia Training App!</h1>
      <div className="quotation">
        <span className="quote">“Trivia is a fact without a home.”</span>
        <span className="author">- Don Rittner</span>
      </div>
      <div className="instructions">
        We all love to play trivia but winning becomes elusive if you&apos;ve
        never seen a question before! Test your skills and practice before the
        next team game here!
      </div>
      <Link to="/play" className="start-playing">
        Start a New Round
      </Link>
    </div>
  );
};

export default Home;
