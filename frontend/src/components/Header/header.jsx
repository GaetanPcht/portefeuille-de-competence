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
            <a href="/" id="toHome">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="50" height="50"
                     viewBox="0 0 50 50">
                    <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
                </svg>
            </a>
            <div className="hamburger" onClick={handleMenu}></div>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <div className="menu__item-inner" id="themes">
                            <div className="menu__overlay"></div>
                            <a className="menu__link" href="/themes/" onClick={handleMenu}>Thèmes</a>
                        </div>
                    </li>
                    <li className="menu__item">
                        <div className="menu__item-inner" id="experiences">
                            <div className="menu__overlay"></div>
                            <a className="menu__link" href="/experiences/" onClick={handleMenu}>Expériences</a>
                        </div>
                    </li>
                    <li className="menu__item">
                        <div className="menu__item-inner" id="competences">
                            <div className="menu__overlay"></div>
                            <a className="menu__link" href="/competences/" onClick={handleMenu}>Compétences</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header