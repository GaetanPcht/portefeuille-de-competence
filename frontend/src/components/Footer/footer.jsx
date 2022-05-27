import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <hr className="separator" color="#8980F5"/>
            <nav>
                <ul>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Github</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;