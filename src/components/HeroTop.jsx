import React from "react";

function HeroTop() {
    return(
        <div className="hero-top">
            <div className="hero-top-display">
                <h1>Advancing <span>Innovation</span> with the technology</h1>
                <div className="hero-top-desc">
                    <p>The Science and Technology Council at IIT BHU is a student-run organisation that 
                        aims to promote the understanding and application of Science and Technology among the
                        IIT BHU community.
                    </p>
                    <img src="./images/pipeflow.jpg" alt="Pipe Flow Image" />
                </div>
            </div>
            <img className="fluid1"src="./images/fluid1.jpg" />
            <img className="fluid2"src="./images/fluid2.jpg" />
            <img className="fluid3"src="./images/fluid3.jpg" />
        </div>
    )

}

export default HeroTop
