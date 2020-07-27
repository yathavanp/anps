import React from 'react';
import './App.css';
import './style.css';
import logo from './images/myface-logo2.png';

class HomeComponent extends React.Component{

    makenavbar(){
        return(
            <nav>
                <a href="/">HOME</a>
                <a href="/requests">REQUESTS</a>
                <a href="/cart">CART</a>
                <a href="/voucher">VOUCHER</a>
                <a href="/contact">CONTACT</a>
            </nav>
        );
    }

    render(){

        return(
            <div class="container">

            <header>
                <img src={logo} alt="Logo for AintNoPaintSaint"/>
            </header>

            {this.makenavbar()}

            <main>
                <h1>AINT NO PAINT SAINT.</h1>
                <p>Digital Art | Paint | Tattoo Designs | Doodles </p>
                <p> Visit instagram to for art collection </p>
                <a href="https://www.instagram.com/aintnopaintsaint/" target="_blank">@aintnotpaintsaint</a>
            </main>


            <footer>
                <p>Markham, ON. CANADA | aintnotpaintsaint.com | Copyright 2020©</p>
            </footer>

            </div>

        );

    }
}

export default HomeComponent;