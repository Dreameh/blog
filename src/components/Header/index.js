import React from "react";
import { Link } from "gatsby";
import("../../sass/dreameh.scss");


const Navbar = () => (
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="../../pages/logo.jpg" alt="Logo" />
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">
              Home
            </a>
            <a className="navbar-item">
              Examples
            </a>
            <a className="navbar-item">
              Documentation
            </a>
            <span className="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
);


const Header = () => (
  <section className="hero is-primary is-small">
    <Navbar />
    <div className="hero-body">
      <div class="container has-text-centered">
        <h1 className="title">Luke's Test</h1>
      </div>
    </div>
  </section>
);

export default Header;
