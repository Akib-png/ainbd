import React from 'react';
import cuckoologo from '../../Icons/cuckoo-logo.svg';

import '../Navigation/Navigation.css';
import MainApp from '../../MainApp';
  // Lawyer's Dashboard

import { Link } from 'react-router-dom';

//________________________________
import llist from '../llist';
import PostSystem from '../PostSystem';




const Navigation = () => {
  return (
    <header className="dropShadow">
      <div className="headerWrapper">
        <div className="headerContainer flex">
          <div className="headerLogoLinkWrapper">
            <div className="headerLogoLink">
              <a href="/MainApp">
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
          <Link to="../PostSystem">  Case updates     </Link>
      <Link to="/llist">     lawyerslist        </Link>
      <Link to="/about">     About                    </Link>
      <Link to="/contact">     Contact                    </Link>
    </nav>
          <div className="githubStar">
          


        



















          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
