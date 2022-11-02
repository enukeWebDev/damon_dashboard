import React from 'react';
import './HeroImgStyles.css';
import SoilImg from '../assets/soil.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="soil-img" src={SoilImg} alt="Soil" />
      </div>

      <div className="content">
        <p>Healthy Soil is the Foundation of a Sustainable Food Production</p>
        <h1>Do You Want To Know Your Soil Health Status?</h1>

        <div>
          <Link to="/mintest" className="btn">
            Minimum
          </Link>

          <Link to="/comptest" className="btn btn-light">
            Comprehensive
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
