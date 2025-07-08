import { useState } from "react";
import MyModal from "./MyModal";
import EducationExperinceCommon from "./EducationExperinceCommon";

export default function Qualification({ qualifiction }) {
    const [activeTab, setActiveTab] = useState("Education");
    const [modalShow, setModalShow] = useState(false);
    const educationData = qualifiction.educationData;
    const workData = qualifiction.experience;
    const qualificationTabs = qualifiction.tabs;

    const [experience, setExperience] = useState(workData[0].experience_details);
    function handleTabs(tabName) {
        setActiveTab(tabName);
    }
    function handleModal(experience_details) {
        setExperience(experience_details);
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
            <h2 className="section__title">{qualifiction.title}</h2>
            <span className="section__subtitle">{qualifiction.subTitle}</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    {qualificationTabs.map((tab, index) => {
                        return <div key={index} className={`qualification__button 'button--flex ${activeTab === tab.tabTitle ? 'qualification__active' : ''}`} onClick={() => handleTabs(tab.tabTitle)}>
                            <i className={tab.tabIcon}></i>
                            {tab.tabTitle}
                        </div>
                    })}
                </div>
                <EducationExperinceCommon
                    activeTab={activeTab}
                    sectionId="Education"
                    data={educationData}
                />
                <EducationExperinceCommon
                    activeTab={activeTab}
                    sectionId="Work Experience"
                    data={workData}
                    handleModal={handleModal}
                />
            </div>
        </section></>);
}