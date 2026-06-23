import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact'
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Services from './components/Services';
import { useEffect } from 'react';
import Footer from './components/Footer';
import './styles.css';
import JsonData from './components/data/data.json';
import PersonalInfo from './components/personal_info/PersonalInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  useEffect(() => {
    const scrollActive = () => {
      // if viewing personal_info route directly, mark its nav link active
      if (window.location.pathname === "/personal_info") {
        const personalLink = document.querySelector(`.nav__menu a[href*="personal_info"]`);
        document.querySelectorAll('.nav__menu a').forEach(a => a.classList.remove('active-link'));
        personalLink?.classList.add('active-link');
        return;
      }

      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 140;
        const sectionId = current.getAttribute("id");

        const navLink = document.querySelector(
          `.nav__menu a[href*="${sectionId}"]`
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink?.classList.add("active-link");
        } else {
          navLink?.classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);
    // also run on location change and on load
    window.addEventListener('popstate', scrollActive);
    scrollActive();

    return () => {
      window.removeEventListener("scroll", scrollActive);
      window.removeEventListener('popstate', scrollActive);
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Home homeData={JsonData.home} />
            <About aboutData={JsonData.about_me} />
            <Skills skills={JsonData.skills} />
            <Qualification qualifiction={JsonData.qualifiction} />
            <Services servicesData={JsonData.services} />
            <Contact contactData={JsonData.contact} />

          </>
        } />
        <Route path="/personal_info" element={
          <>
            <PersonalInfo personalInfo={JsonData.personal_info} />
          </>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
