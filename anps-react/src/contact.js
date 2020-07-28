import React from "react";
import "./App.css";
import "./style.css";
import logo from "./images/myface-logo2.png";
import { Link } from "react-router-dom";

class contact extends React.Component {
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
          <h1>CONTACT US.</h1>
          <p>
            For any art inquiries or questions, please contact us via{" "}
            <im>Direct Message</im> on <im>Instagram</im> or via <im>Email</im>.
          </p>
          <p>
            Instagram :
            <a
              href="https://www.instagram.com/aintnopaintsaint/"
              target="_blank"
            >
              @aintnotpaintsaint
            </a>
          </p>
          <p>
            Email :{" "}
            <a
              href="mailto:aintnopaintsaint@gmail.com?Subject=Art Inquiry:"
              target="_blank"
            >
              aintnopaintsaint@gmail.com
            </a>
          </p>
        </main>

        <div></div>

        <footer>
          <p>Markham, ON. CANADA | aintnotpaintsaint.com | Copyright 2020©</p>
        </footer>
      </div>
    );
  }
}

export default contact;
