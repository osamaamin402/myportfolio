import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from './images/header_logo.png';
import TokenModal from "./TokenModal";

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

    const [modalShow, setModalShow] = useState(false);

    function handleModalClose() {
        setModalShow(false);
    }
    function handleTheme() {
        setThemeIcon(prev => (prev === "uil-sun" ? "uil-moon" : "uil-sun"));
    }


    function handleShowMenu() {
        const navMenu = document.getElementById("nav-menu");
        if (navMenu) {
            navMenu.classList.add("show-menu");
        }
    }

    const navigate = useNavigate();
    function handleNavClick(e, hashPath) {
        // if we're on the personal_info route, navigate back to main page and scroll to the target
        if (window.location.pathname === "/personal_info") {
            e.preventDefault();
            navigate('/');
            // small delay to allow root content to render, then scroll to target
            setTimeout(() => {
                const el = document.querySelector(hashPath);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                // update active-link
                document.querySelectorAll('.nav__menu a').forEach(a => a.classList.remove('active-link'));
                const link = document.querySelector(`.nav__menu a[href*="${hashPath.replace('#','')}"]`);
                link?.classList.add('active-link');
            }, 80);
            return;
        }
        // otherwise default anchor behavior will scroll to section on same page
    }

    function handleHideMenu() {
        const navMenu = document.getElementById("nav-menu");
        if (navMenu) {
            navMenu.classList.remove("show-menu");
        }
    }
    
    function handlePersonalClick(e) {
        e.preventDefault();
        // don't open token modal if already viewing personal_info
        if (window.location.pathname === "/personal_info") return;
        setModalShow(true);
    }
    return (<>
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">
                    <img src={logoImg} alt="logo" className="nav__logo-img" />
                    <span className="nav__name">Osama Amin Khan</span>
                </a>
                <div className='nav__menu' id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={(e)=>handleNavClick(e,'#home')}>
                                <i className="uil uil-estate nav_icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={(e)=>handleNavClick(e,'#about')}>
                                <i className="uil uil-user nav_icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={(e)=>handleNavClick(e,'#skills')}>
                                <i className="uil uil-file-alt nav_icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" className="nav__link" onClick={(e)=>handleNavClick(e,'#qualification')}>
                                <i className="uil uil-file-alt nav_icon"></i>Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link" onClick={(e)=>handleNavClick(e,'#services')}>
                                <i className="uil uil-briefcase-alt nav_icon"></i>Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={(e)=>handleNavClick(e,'#contact')}>
                                <i className="uil uil-message nav_icon"></i>Contact
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#personal_info" className="nav__link" onClick={handlePersonalClick}>
                                <i className="uil uil-user nav_icon"></i>Personal Info
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
            <TokenModal
                show={modalShow}
                onHide={handleModalClose}
            />
        </header></>
    );
}