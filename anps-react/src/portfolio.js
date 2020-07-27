import React from "react";
import "./App.css";
import "./style.css";
import logo from "./images/myface-logo2.png";

class portfolio extends React.Component {
  makenavbar() {
    return (
      <nav>
        <a href="/">HOME</a>
        <a href="/portfolio">PORTFOLIO</a>
        <a href="/contact">CONTACT</a>
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
