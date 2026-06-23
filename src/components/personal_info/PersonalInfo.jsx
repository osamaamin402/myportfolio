import styles from "./PersonalInfo.module.css";

import profile from "../images/04.jpg";
import profile1 from "../assets/gallery/1347135.png";
import profile2 from "../assets/gallery/1357584.png";
import profile3 from "../assets/gallery/251285.jpg";
import profile4 from "../assets/gallery/410582.jpg";
import profile5 from "../assets/gallery/507808.png";
import profile6 from "../assets/gallery/966242.jpg";
import profile7 from "../assets/gallery/985839.jpg";
import profile8 from "../assets/gallery/1357584.png";

const galleryImages = [
    profile1,
    profile2,
    profile3,
    profile4,
    profile5,
    profile6,
    profile7,
    profile8
];

export default function PersonalInfo() {
    return (
        <section className={styles.personalInfo} id="personal_info">
            <h2 className="section__title">Personal Information</h2>
            <span className="section__subtitle">
                Marriage Profile
            </span>

            <div className={styles.wrapper}>
                {/* Hero Card */}
                <div className={styles.heroCard}>
                    <div className={styles.avatarContainer}>
                        <img
                            src={profile}
                            alt="Osama Amin Khan"
                            className={styles.avatar}
                        />
                    </div>

                    <div className={styles.heroContent}>
                        <h2>Osama Amin Khan</h2>

                        <p className={styles.designation}>
                            Senior Software Engineer | Full Stack Developer
                        </p>

                        <p className={styles.intro}>
                            I come from a respectable and family-oriented background. 
                            By profession, I am a Software Engineer currently working in the IT industry 
                            and have a stable career. 
                            I believe in honesty, mutual respect, understanding, 
                            and maintaining strong family values.
                        </p>

                    </div>
                </div>

                {/* Basic Details */}
                <div className={styles.card}>
                    <h3>Basic Details</h3>

                    <div className={styles.infoGrid}>
                        <Info title="DOB" value="07/07/1999" />
                        <Info title="Height" value="5'9" />
                        <Info title="Complexion " value="Fair" />
                        <Info title="Location" value="Pune, Maharashtra" />
                        <Info title="Native Place" value="Takli BK,Amravati" />
                        <Info title="Education" value="B.E. Computer Science" />
                    </div>
                </div>

                {/* About Me */}
                <div className={styles.card}>
                    <h3>About Me</h3>

                    <p>
                        I am a Full Stack Software Engineer working with modern
                        technologies including Java, Spring Boot, Microservices,
                        React.js, Cloud Platforms, and Enterprise Applications.
                    </p>

                    <p>
                        I believe in honesty, mutual respect, responsibility,
                        continuous learning, and maintaining a healthy balance
                        between professional and personal life.
                    </p>

                    {/* <p>
                        My goal is to build a happy, respectful, and supportive
                        family where both partners can grow together while
                        pursuing their dreams.
                    </p> */}
                </div>

                {/* Family */}
                <div className={styles.card}>
                    <h3>Family Details</h3>

                    <div className={styles.familyGrid}>
                        <div className={styles.familyItem}>
                            <span>Father</span>
                            <h4>Mr. Rahematullah Khan</h4>
                            <p>Farmer/Property Dealer</p>
                            {/* <small>B.Com</small> */}
                        </div>

                        <div className={styles.familyItem}>
                            <span>Mother</span>
                            <h4>Mrs. Shama Parveen</h4>
                            <p>Homemaker</p>
                            {/* <small>B.A.</small> */}
                        </div>

                        <div className={styles.familyItem}>
                            <span>Brother</span>
                            <h4>Huzaifa Khan</h4>
                            <p>Chemical Engineer(Persuing)</p>
                            <small>ITI Disel Mechanic Completed</small>
                        </div>                        

                        <div className={styles.familyItem}>
                            <span>Sister</span>
                            <h4>Masira Anjum</h4>
                            <p>BSc(Persuing)</p>
                            <small>BA Completed</small>
                        </div>

                        <div className={styles.familyItem}>
                            <span>Brother</span>
                            <h4>Anas Ammar</h4>
                            <p>Software Engineer(Persuing)</p>
                            <small>Student</small>
                        </div>
                    </div>
                </div>

                {/* Lifestyle */}
                <div className={styles.card}>
                    <h3>Lifestyle & Values</h3>

                    <ul className={styles.list}>
                        <li>Career Oriented</li>
                        <li>Family Focused</li>
                        <li>Honest & Trustworthy</li>
                        <li>Respectful & Responsible</li>
                        <li>Values Education & Personal Growth</li>
                        <li>Believes in Mutual Understanding</li>
                    </ul>
                </div>

                {/* Partner Preference */}
                {/* <div className={styles.card}>
                    <h3>Partner Preference</h3>

                    <p>
                        Looking for a well-educated, kind-hearted, respectful
                        life partner who values family, mutual understanding,
                        and long-term commitment.
                    </p>
                </div> */}

                {/* Gallery */}
                <div className={styles.card}>
                    <h3>Photo Gallery</h3>

                    <div className={styles.gallery}>
                        {galleryImages.map((img, index) => (
                            <div key={index} className={styles.galleryItem}>
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Info({ title, value }) {
    return (
        <div className={styles.infoItem}>
            <span>{title}</span>
            <h4>{value}</h4>
        </div>
    );
}