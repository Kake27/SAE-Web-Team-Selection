import React from "react";

function Footer() {
    return (
        <div className="footer-bg">
            <footer>
                <div className="logos">
                    <img src="../../public/images/iitbhu.png" alt="institute logo" />
                    <img src="../../public/images/saelogo.png" alt="sae logo" />
                </div>
                <div className="info">
                    <h3><span>SAE</span> Collegiate Club</h3>
                    <p>TACK Ka full form Or pura tack ka address</p>
                    <p>IIT (BHU), Varanasi, India PIN: 221005</p>
                </div>
                <div className="socials">
                    <h3>Socials</h3>
                    <ul className="social-list">
                        <a href="#">
                            <li><img src="../../public/images/insta.png" />Instagram</li>
                        </a>
                        <a href="#">
                            <li><img src="../../public/images/facebook.png" />Facebook</li>
                        </a>
                        <a href="#">
                            <li><img src="../../public/images/linkedin.png" />Linkedin</li>
                        </a>
                        <a href="#">
                            <li><img src="../../public/images/email.png" />Email</li>
                        </a>
                    </ul>

                </div>
                <div className="email">
                    <h3> Stay up to date</h3>
                    <form>
                        <input type="search" placeholder="Your email address" />
                        <button type="submit">
                            <svg fill="#ffffff" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M508.645,18.449c-2.929-2.704-7.133-3.51-10.826-2.085L6.715,204.446c-3.541,1.356-6.066,4.515-6.607,8.264 c-0.541,3.75,0.985,7.496,3.995,9.796l152.127,116.747c-0.004,0.116-0.575,0.224-0.575,0.342v83.592 c0,3.851,2.663,7.393,6.061,9.213c1.541,0.827,3.51,1.236,5.199,1.236c2.026,0,4.181-0.593,5.931-1.756l56.12-37.367 l130.369,99.669c1.848,1.413,4.099,2.149,6.365,2.149c1.087,0,2.186-0.169,3.248-0.516c3.27-1.066,5.811-3.672,6.786-6.974 L511.571,29.082C512.698,25.271,511.563,21.148,508.645,18.449z M170.506,321.508c-0.385,0.36-0.7,0.763-1.019,1.163 L31.659,217.272L456.525,54.557L170.506,321.508z M176.552,403.661v-48.454l33.852,25.887L176.552,403.661z M359.996,468.354 l-121.63-93.012c-1.263-1.77-2.975-3.029-4.883-3.733l-47.29-36.163L480.392,60.86L359.996,468.354z"></path> </g> </g> </g></svg>
                        </button>
                    </form>

                </div>
            </footer>
        </div>
        
    )
}

export default Footer