import { useState } from "react";
import MyModal from "./MyModal";

export default function Qualification() {
    const [activeTab, setActiveTab] = useState("education");
    const [modalShow, setModalShow] = useState(false);
    

    const experiences = [
        {
            title: "Full Stack Java Developer | React JS Developer",
            details: [
                "Developed and deployed a range of modules in EWA applications.",
                "Implemented multiple reusable React components which reduced the effort and development time of other developers.",
                "Enriched network security by introducing rate limiter.",
                "Worked on Banking, Finance and Mutual Fund Domain.",
            ],
        },
        {
            title: "Full Stack Java Developer | React JS Developer",
            details: [
                "Implemented API for generating pdf and converting pdf into octet byte stream to reduce response time and storage.",
                "Improved application performance by replacing SQL queries with functions and procedures.",
                "Collaborated with cross-functional teams, product managers, designers, and ensuring high-quality results.",
                "Worked on Health Care Domain.",
            ],
        }
    ];
    const [experience, setExperience] = useState(experiences[0]);

    /*==================== QUALIFICATION TABS ====================*/
    function handleTabs(tabName) {
        setActiveTab(tabName);
    }
    function handleModal(index) {
        setExperience(experiences[index]);
        setModalShow(true);
    }
    function handleModalClose() {
        setModalShow(false);
    }
    return (<>

        <MyModal
            showModal={modalShow}
            onHide={handleModalClose}
            experience={experience}
        />

        <section className="qualification__section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={`qualification__button 'button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`} data-target='#education' onClick={() => handleTabs("education")}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={`qualification__button 'button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`} data-target="#work" onClick={() => handleTabs("work")}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Work Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
                    <div className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''}`} data-content id="education">
                        {/* <!--==================== QUALIFICATION 1 ====================-->  */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BE-Computer Science and Engineering </h3>
                                <span className="qualification__subtitle">Sipna College of Engineering and Technology</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <!--==================== QUALIFICATION 2 ====================-->  */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <!-- <span className="qualification__line"></span> --> */}
                            </div>

                            <div>
                                <h3 className="qualification__title">Diploma in Computer Technology</h3>
                                <span className="qualification__subtitle">V.Y.W.S Polytechnic Badnera.</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016 - 2018
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
                    <div className={`qualification__content ${activeTab === 'work' ? 'qualification__active' : ''}`} data-content id="work">
                        {/* <!--==================== QUALIFICATION 1 ====================-->  */}
                        <div className="qualification__data">
                            <div  className="experience" onClick={()=>{handleModal(0)}}>
                                <h3 className="qualification__title">Assistant Manager</h3>
                                <span className="qualification__subtitle">Finlogic Technologies India Pvt. Ltd | NJ Group</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <!--==================== QUALIFICATION 2 ====================-->  */}
                        <div className="qualification__data">
                            <div> </div>
                            <div>
                                <span className="qualification__rounder"></span>
                            </div>

                            <div  className="experience" onClick={()=>{handleModal(1)}}>
                                <h3 className="qualification__title">Software Engineer Trainee</h3>
                                <span className="qualification__subtitle">Cognizant Technology Solution</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2022
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section></>);
}