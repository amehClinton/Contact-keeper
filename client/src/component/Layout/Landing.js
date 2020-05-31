import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'> contact-keeper </h1>
          <p className='lead'> creates Contact for Users</p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              {" "}
              Sign up
            </Link>
            <Link to='/login' className='btn btn-light'>
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
