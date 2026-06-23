import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import CommonModal from './CommonModal';
export default function Contact({ contactData }) {

    const contactDetails = contactData.contactDetails;
    const contactLinks = contactData.contactLinks;
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
    const form = useRef();
    const [msg, setMsg] = useState("");
    const [title, setTitle] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = () => {
        setLoading(true);

        emailjs
            .sendForm('service_y29hmyp', 'template_s6m9eg8', form.current, {
                publicKey: 't29YZLEjbA7DGiD6O',
            })
            .then(
                () => {
                    reset();
                    setTitle("Success!");
                    setMsg("Message has been sent!");
                    setModalShow(true);
                    setLoading(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setTitle("Failed!");
                    setMsg(error.text);
                    setModalShow(true);
                    setLoading(false);
                },
            );
    };

    function handleModalClose() {
        setModalShow(false);
    }
    function Spinner() {
        return <div className="loader"></div>;
    }
    return (<>

        <CommonModal
            showModal={modalShow}
            onHide={handleModalClose}
            msg={msg}
            title={title} />
        <section className="contact section" id="contact">
            <h2 className="section__title">{contactData.title}</h2>
            <span className="section__subtitle">{contactData.subTitle}</span>

            <div className="contact__container container grid">
                <div>
                    {contactDetails.map((data, index) => {
                        return <div className="contact__information" key={index}>
                            <i className={data.contactIcon}></i>

                            <div>
                                <h3 className="contact__title">{data.contactTitle}</h3>
                                <span className="contatc__subtitle">{data.contactSubTilte}</span>
                            </div>
                        </div>

                    })}
                    <div className="contact__information row ">
                        <p className="mb-2">Follow me:</p>
                        <div className="d-flex pt-2">
                            {contactLinks.map((link, index) => {
                                return <a href={link.link} key={index} target="_blank" rel='noreferrer'>
                                    <i className={link.icon}></i></a>
                            })}
                        </div>
                    </div>

                </div>
                <form ref={form} onSubmit={handleSubmit(sendEmail)} className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input
                                type="text"
                                className="contact__input"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className="invalid-field">{errors.name.message}</p>}
                        </div>

                        <div className="contact__content">
                            <label htmlFor="email" className="contact__label">E-mail</label>
                            <input
                                type="email"
                                className="contact__input"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email format",
                                    },
                                })}
                            />
                            {errors.email && <p className="invalid-field">{errors.email.message}</p>}
                        </div>
                    </div>

                    <div className="contact__content">
                        <label htmlFor="contact" className="contact__label">Contact</label>
                        <input
                            type="text"
                            className="contact__input"
                            {...register("contact", {
                                required: "Contact is required",
                                pattern: {
                                    value: /^\d{10,10}$/,
                                    message: "Contact must be 10 digits",
                                },
                            })}
                        />
                        {errors.contact && <p className="invalid-field">{errors.contact.message}</p>}
                    </div>
                    <div className="contact__content">
                        <label htmlFor="description" className="contact__label">Description</label>
                        <textarea
                            className="contact__input"
                            rows="7"
                            {...register("description", { required: "Description is required" })}
                        ></textarea>
                        {errors.description && <p className="invalid-field">{errors.description.message}</p>}
                    </div>

                    <div>
                        {loading ? <Spinner /> :
                            <button type="submit" id='btn-send-msg' className="button button--flex">
                                Send message
                                <i className="uil uil-message button__icon"></i>
                            </button>}
                    </div>
                </form>
            </div>

        </section></>);
}