import React from "react";
import "./App.css";
import "./style.css";
import logo from "./images/myface-logo2.png";
import { Link } from "react-router-dom";
import InstagramEmbed from "react-instagram-embed";

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

        <main class="insta">
          <h1>PORTFOLIO.</h1>
          <inst>
            <InstagramEmbed
              url="https://www.instagram.com/p/B-C2slaBZjz/"
              maxWidth={320}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </inst>
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
