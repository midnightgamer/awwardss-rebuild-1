import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/case-studies">Case Studies</NavLink>
              </li>
              <li>
                <NavLink to="/approach">Approach</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contacts</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/contact">Get in touch</NavLink>
                </li>
                <li>
                  <NavLink to="/audit">Get a free audit</NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarters</li>
                <li>Route de hura</li>
                <li>1914 street</li>
                <li>Swizerland</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+21 54614 54542</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>
                  <NavLink to="privacy">Privacy and Cookie</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
