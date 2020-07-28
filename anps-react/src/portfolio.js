import React from "react";
import "./App.css";
import "./style.css";
import logo from "./images/myface-logo2.png";
import { Link } from "react-router-dom";

class portfolio extends React.Component {
  makenavbar() {
    return (
      <nav>
        <Link to="">HOME</Link>
        <Link to="portfolio">PORTFOLIO</Link>
        <Link to="contact">CONTACT</Link>
      </nav>
    );
  }

  render() {
    return (
      <div class="container">
        <header>
          <img src={logo} alt="Logo for AintNoPaintSaint" />
        </header>

        {this.makenavbar()}

        <main>
          <h1>PORTFOLIO.</h1>
          <p>INSTA FEED</p>
        </main>

        <div></div>

        <footer>
          <p>Markham, ON. CANADA | aintnotpaintsaint.com | Copyright 2020©</p>
        </footer>
      </div>
    );
  }
}

export default portfolio;
