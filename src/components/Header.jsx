import React from "react";



function Header(){
    return (
        <header>
            <div className="header-top">
                <img src="../../public/images/sae.png" alt="sae logo"/>
                <ul className="nav-links">
                    <li className="selected"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
                <a href="#"><button>Trident</button></a>

                <div className="menu-icon">
                    <img src="../../public/images/menu.png" />
                </div>

                
            </div>

            <div className="header-bottom">
                <h1>Team Trident</h1>
                <p>SAE (Society of Automotive Engineers) aims to give a platform to people who wish to lear about
                    and build automobiles. Our teams take part in various RC and automotive events all around the year.
                </p>
            </div>
        </header>
    )

}

export default Header