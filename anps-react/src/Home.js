import React from "react";
import "./App.css";
import "./style.css";
import logo from "./images/myface-logo2.png";
import { Link } from "react-router-dom";

class HomeComponent extends React.Component {
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
          <h1>AINT NO PAINT SAINT.</h1>
          <p>Digital Art | Paint | Tattoo Designs | Doodles </p>
          <p> Follow us on Instagram </p>
          <a href="https://www.instagram.com/aintnopaintsaint/" target="_blank">
            @aintnotpaintsaint
          </a>
        </main>

        <footer>
          <p>Markham, ON. CANADA | aintnotpaintsaint.com | Copyright 2020©</p>
        </footer>
      </div>
    );
  }
}

export default HomeComponent;
