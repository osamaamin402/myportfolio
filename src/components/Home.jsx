import blobImg from './images/profilepic.jpg'
export default function Home() {
    return (
        <main className="main">
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <div className="home__social">
                            <a href="https://www.linkedin.com/in/osama-amin-khan-855299185/" target="_blank" className="home__social-icon" rel='noreferrer'>
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                            <a href="https://x.com/OsamaAm48154487" target="_blank" className="home__social-icon" rel='noreferrer'>
                                <i className="uil uil-twitter-alt"></i>
                            </a>
                            <a href="https://github.com/osamaamin402" target="_blank" className="home__social-icon" rel='noreferrer'>
                                <i className="uil uil-github-alt"></i>
                            </a>
                        </div>

                        <div className="home__img">
                           <img className="home__blob-img" src={blobImg} alt="Profile" />
                        </div>


                        <div className="home__data">
                            <h1 className="home__title">Hi, I'm Osama Amin</h1>
                            <h3 className="home__subtitle">Full Stack Java Developer <br></br> React.JS Developer</h3>
                            <p className="home__description">Experienced Full Stack Java and React JS Developer with 3.5 years of hands-on experience.</p>
                            <a href="#contact" className="button button--flex home__button">
                                Contact Me<i className="uil uil-message button__icon"></i>
                            </a>
                        </div>
                    </div>

                    <div className="home__scroll">
                        <a href="#about" className="home__scroll-button button--flex">
                            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                            <span className="home__scroll-name">Scroll Down</span>
                            <i className="uil uil-arrow-down home__scroll-arrow"></i>
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
}