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


function App() {
  useEffect(() => {
    const scrollActive = () => {
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


    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);
  return (
    <>
      <Header />
      <Home homeData={JsonData.home} />
      <About aboutData={JsonData.about_me}/>
      <Skills skills={JsonData.skills}/>
      <Qualification qualifiction={JsonData.qualifiction}/>
      <Services servicesData={JsonData.services} />
      <Contact contactData={JsonData.contact}/>
      <Footer />
    </>
  );
}

export default App;
