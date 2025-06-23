export default function Contact() {

    return (<>
        {/* <!--==================== CONTACT ME ====================--> */}
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone-alt contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Call me</h3>
                            <span className="contatc__subtitle">(+91) 7350492047</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>

                        <div>
                            <h3 className="contact__title">E-mail</h3>
                            <span className="contatc__subtitle">osamaamin402@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon"></i>

                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contatc__subtitle">Amravati, Maharashtra, India</span>
                        </div>
                    </div>
                    <div className="contact__information row ">
                         <p className="mb-2">Follow me:</p>
                        <div className="d-flex pt-2">
                            <a href="https://www.instagram.com/its.amin.007/" target="_blank" rel='noreferrer'><i className="uil uil-instagram contact__icon"></i></a>
                            <a href="https://www.facebook.com/osama.amin.182/"  target="_blank" rel='noreferrer'><i className="uil uil-facebook-f contact__icon"></i></a>
                            <a href="https://www.linkedin.com/in/osama-amin-khan-855299185/" target="_blank" rel='noreferrer'><i className="uil uil-linkedin contact__icon"></i></a>
                        </div>
                    </div>

                </div>

                <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Name</label>
                            <input type="text" className="contact__input" />
                        </div>

                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">E-mail</label>
                            <input type="email" className="contact__input" />
                        </div>
                    </div>

                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Subject</label>
                        <input type="text" className="contact__input" />
                    </div>

                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Description</label>
                        <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
                    </div>

                    <div>
                        <a href="#home" className="button button--flex" rel='noreferrer'>
                            Send message
                            <i className="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </form>
            </div>

        </section></>);
}