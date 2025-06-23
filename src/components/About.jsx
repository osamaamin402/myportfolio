import abouMeImg from './images/aboutImage.jpg'
export default function About() {
    return (<>
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img src={abouMeImg} alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        Myself Osam Amin Khan, a dedicated and passionate Full Stack Developer with over 3.5 years of hands-on experience in building robust, scalable, and user-centric applications. I hold a Bachelor’s degree in Computer Science and Engineering (2021) from Sipna College of Engineering and Technology, Amravati. My expertise lies in Java, Spring Boot, React JS, Microservices, and working across diverse domains like finance, mutual funds, and healthcare. I bring a blend of technical proficiency, problem-solving capabilities, and team collaboration skills, making me an asset to any development team.
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">3.5</span>
                            <span className="about__info-name">Years <br /> experience</span>
                        </div>
                        <div>
                            <span className="about__info-title">02+</span>
                            <span className="about__info-name">Completed <br /> certifications</span>
                        </div>
                        <div>
                            <span className="about__info-title">02</span>
                            <span className="about__info-name">companies<br />worked</span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a download="osama_amin_khan_full_stack_developer"
                            href="./pdf/resume.pdf"
                            className="button button--flex"
                            target="_blank" rel="noopener noreferrer" >
                            Download CV<i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section></>);
}