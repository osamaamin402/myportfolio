import abouMeImg from './images/aboutImage.jpg'
export default function About({ aboutData }) {
    return (<>
        <section className="about section" id="about">
            <h2 className="section__title">{aboutData?.title}</h2>
            <span className="section__subtitle">{aboutData?.subTitle}</span>

            <div className="about__container container grid">
                <img src={abouMeImg} alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        {aboutData?.intro}
                    </p>
                    <div className="about__info">
                        {aboutData?.experience.map((data, index) => {
                            return <div key={index}>
                                <span className="about__info-title">{data.keyEvent}</span>
                                <span
                                    className="about__info-name"
                                    dangerouslySetInnerHTML={{
                                        __html: data.valueEvent.replace(/\n/g, '<br />')
                                    }}
                                />
                            </div>
                        })}

                    </div>

                    <div className="about__buttons">
                        <a download="Osama_Amin_Khan_Full_Stack_Developer"
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