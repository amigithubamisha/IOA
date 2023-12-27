import React from 'react';
import {Link} from 'react-router-dom'
import './Objective.css';
import about from '../../assets/about.jpg'; 

const Objective = () => {
  return (
    <>
    <div className="objective-container">
      <div className="objective-content">
          <div className="image-container">
            <img src={about} alt="Objective" />
          </div>
          <div className="text-container">
            <h3 className="objective-heading">Objective</h3>
            <p className="objective-text">
              To bring all the Odia and non-Odia families together in Ireland to create a big family of Lord Jagannath in the foreign land, to celebrate and enjoy the native festivals, and stand for each other.
            </p>
            <div className="self-center">
              <Link to='/about'>
              <button className="knw-btn">Know More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Objective;
