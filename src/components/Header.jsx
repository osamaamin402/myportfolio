import { useEffect, useState } from "react";

export default function Header() {

    const [themeIcon, setThemeIcon] = useState(localStorage.getItem('themeIcon') !== 'uil-sun' ? 'uil-sun' : 'uil-moon');
    useEffect(() => {
        themeIcon === 'uil-moon' ? document.body.classList.remove('dark-theme') : document.body.classList.add('dark-theme');
        const scrollHeader = () => {
            const nav = document.getElementById("header");
            if (window.scrollY >= 80) {
                nav.classList.add("scroll-header");
            } else {
                nav.classList.remove("scroll-header");
            }
        };

        window.addEventListener("scroll", scrollHeader);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("scroll", scrollHeader);
        };
    })
    function handleTheme() {
        themeIcon === 'uil-moon' ? document.body.classList.remove('dark-theme') : document.body.classList.add('dark-theme');
        setThemeIcon(() => themeIcon === 'uil-moon' ? 'uil-sun' : 'uil-moon');
        localStorage.setItem('themeIcon', themeIcon);

    }


    const navMenu = document.getElementById("nav-menu");


    function handleShowMenu() {
        navMenu.classList.add("show-menu");

    }
    function handleHideMenu() {
        navMenu.classList.remove("show-menu");

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