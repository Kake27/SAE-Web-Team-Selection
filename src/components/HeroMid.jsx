import React from "react";
import Item from "./BenefitsItem";

function HeroMid(){
    return(
        <div className="hero-mid">
            <h1>Benefits of Contribution</h1>
            <div className="benefits-list-bg">
                <div className="benefits-list">
                    <Item src="../../public/images/whiteboard.png" heading="Exposure"
                        content="Our advanced spyware detection engine can identify if a device contains spyware or bugging software."/>
                    <Item src="../../public/images/hand.png" heading="R&D and Innovation"
                        content="Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords)."/>
                    <Item src="../../public/images/earth.png" heading="Networking"
                        content="Check which apps can access your location microphone or camera. Get alerted if a known tracking app is installed."/>
                    <Item src="../../public/images/books.png" heading="Enhancing Projects and Education"
                        content="Analyze your operating system for signs of tampering that could compromise security such as Jailbreaking."/>
                    <Item src="../../public/images/lightbulb.png" heading="Opportunities"
                        content="Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions."/>
                    <Item src="../../public/images/idea.png" heading="Practical Applications"
                        content="We create easy to use apps that can check your device for vulnerabilities in a matter of minutes."/>
                </div>

            </div>
            
        </div>
    )

}

export default HeroMid