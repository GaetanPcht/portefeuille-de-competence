import * as React from "react"
import "./header.css"

const Header = () => {

    const handleMenu = () => {
        const menuElement = document.querySelector("#header .menu");
        const headerElement = document.querySelector("#header");
        const hamburgerElement = document.querySelector("#header .hamburger");
        const bodyElement = document.querySelector("body");
        menuElement.classList.toggle("active")
        hamburgerElement.classList.toggle("active")
        headerElement.classList.toggle("active")
        headerElement.classList.contains("active") ? bodyElement.style.overflow = "hidden" : bodyElement.style.overflow = "unset";
        document.documentElement.scrollTop = 0;
    }
    return(
        <header id="header">
            <div className="hamburger" onClick={handleMenu}></div>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <div className="menu__item-inner" id="themes">
                            <div className="menu__overlay"></div>
                            <a className="menu__link" href="#">Thèmes</a>
                        </div>
                    </li>
                    <li className="menu__item">
                        <div className="menu__item-inner" id="experiences">
                            <div className="menu__overlay"></div>
                            <a className="menu__link" href="#">Expériences</a>
                        </div>
                    </li>
                    <li className="menu__item">
                        <div className="menu__item-inner" id="competences">
                            <div className="menu__overlay"></div>
                            <a className="menu__link" href="#">Compétences</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header