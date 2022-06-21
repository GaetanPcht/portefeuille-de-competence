import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <hr className="separator" color="#8980F5"/>
            <nav>
                <ul>
                    <li><a href="https://www.linkedin.com/in/ga%C3%A9tan-pichout-1ba269158/" target="_blank" rel="noreferrer">Linkedin</a></li>
                    <li><a href="https://github.com/GaetanPcht" target="_blank" rel="noreferrer">Github</a></li>
                    <li><a href="https://docs.google.com/document/d/1pGFdXsrvzeIXQpZdX6EVkrCAZWj0TRYt0JxDAp5qD0w/edit?usp=sharing" target="_blank" rel="noreferrer">Offre d'emploi</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;