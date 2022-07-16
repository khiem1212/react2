import React from "react";
import "./header.css";
class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div class="container">
                    <div class="header__col">

                    <h1>Start Bootstrap
                    </h1>

                    <div class="header__content">
                        <span id="home">Home
                        </span>
                        <span>About</span>
                        <span>Contact</span>
                    </div>
                    </div>
                </div>
            </div>
        );


    }
}
export default Header;