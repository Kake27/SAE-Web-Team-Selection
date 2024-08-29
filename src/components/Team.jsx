import React from "react";

function Team() {
    return(
        <div className="team-info">
            <h1>Meet Our Team</h1>
            <div className="team-menu">
                <ul className="verticals">
                    <div className="vertical-item selected-vertical">
                        <li className="selected-vertical">Helm</li>
                    </div>
                    <div className="vertical-item">
                        <li>Aerodynamics</li>
                    </div>
                    <div className="vertical-item">
                        <li>Vehicle Dynamics</li>
                    </div>
                    <div className="vertical-item">
                        <li>Structures</li>
                    </div>
                    <div className="vertical-item">
                        <li>Marketing</li>
                    </div>
                    <div className="vertical-item">
                        <li>Web Team</li>
                    </div>
                </ul>
                <div className="images">
                    <div className="image-item">
                        <img src="../../public/images/pic1.png" />
                        <h3>Nistha Jain</h3>
                        <p>Design Head</p>
                    </div>
                    <div className="image-item">
                        <img src="../../public/images/pic2.png" />
                        <h3>Saiyam Jain</h3>
                        <p>Web Team Head</p>
                    </div>
                    <div className="image-item">
                        <img src="../../public/images/pic3.png" />
                        <h3>Palti Sumasri</h3>
                        <p>Social Content Head</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team