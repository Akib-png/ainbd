import React from 'react';
import cuckoologo from '../../Icons/cuckoo-logo.svg';

import '../Navigation/Navigation.css';


import { Link } from 'react-router-dom';

//________________________________
import llist from '../llist';




const Navigation = () => {
  return (
    <header className="dropShadow">
      <div className="headerWrapper">
        <div className="headerContainer flex">
          <div className="headerLogoLinkWrapper">
            <div className="headerLogoLink">
              <a href="/">
                <div className="headerLogo flex flex-row">
                  <div className="logoImg">
                    <img src={cuckoologo} alt="Cuckoo Logo" />
                  </div>
                  <div className="logoText">AinBD</div>
                </div>
              </a>
            </div>
          </div>
          <nav>
          <Link to="/llist"> Home  </Link>
      <Link to="/llist">Search lawyers </Link>
      <Link to="/about">About </Link>
      <Link to="/contact">Contact </Link>
    </nav>
          <div className="githubStar">
          


        



















          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
