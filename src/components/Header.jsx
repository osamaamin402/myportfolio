import { useEffect, useState } from "react";

export default function Header() {
    const [themeIcon, setThemeIcon] = useState(() => {
        const saved = localStorage.getItem("themeIcon");
        return saved === "uil-moon" ? "uil-moon" : "uil-sun";
    });
    useEffect(() => {
        if (themeIcon === "uil-sun") {
            document.body.classList.add("dark-theme"); // 🌙 Dark
        } else {
            document.body.classList.remove("dark-theme"); // ☀️ Light
        }
        localStorage.setItem("themeIcon", themeIcon);

        const scrollHeader = () => {
            const nav = document.getElementById("header");
            if (window.scrollY >= 80) {
                nav.classList.add("scroll-header");
            } else {
                nav.classList.remove("scroll-header");
            }
        };

        window.addEventListener("scroll", scrollHeader);
        return () => {
            window.removeEventListener("scroll", scrollHeader);
        };
    })

    function handleTheme() {
        setThemeIcon(prev => (prev === "uil-sun" ? "uil-moon" : "uil-sun"));
    }


    function handleShowMenu() {
        const navMenu = document.getElementById("nav-menu");
        if (navMenu) {
            navMenu.classList.add("show-menu");
        }
    }

    function handleHideMenu() {
        const navMenu = document.getElementById("nav-menu");
        if (navMenu) {
            navMenu.classList.remove("show-menu");
        }
    }
    return (<>
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">Osama Amin Khan</a>
                <div className='nav__menu' id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav_icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav_icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav_icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" className="nav__link">
                                <i className="uil uil-file-alt nav_icon"></i>Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav_icon"></i>Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav_icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" onClick={handleHideMenu}></i>
                </div>
                <div className="nav__btns">

                    <i className={`uil ${themeIcon} change-theme`} id="theme-button" onClick={handleTheme}></i>

                    <div className="nav__toggle" id="nav-toggle" onClick={handleShowMenu}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header></>
    );
}