import blobImg from './images/profilepic.jpg';
export default function Home({ homeData }) {
    const home = homeData;
    const links = home.links;
    return (
        <main className="main">
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <div className="home__social">
                            {links.map((data, index) => {
                                return <a href={data.link_uri} key={index} target="_blank" className="home__social-icon" rel='noreferrer'>
                                    <i className={data.link_icon}></i>
                                </a>
                            })}
                        </div>

                        <div className="home__img">
                            <img className="home__blob-img" src={blobImg} alt="Profile" />
                        </div>
                        <div className="home__data">
                            <h1 className="home__title">{home.title}</h1>
                            <h3 className="home__subtitle" dangerouslySetInnerHTML={{
                                __html: home.role.replace(/\n/g, '<br />')
                            }} />
                            <p className="home__description">{home.short_descreption}</p>
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