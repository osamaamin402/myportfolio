const EducationExperinceCommon = ({ activeTab, sectionId, data, handleModal }) => {
    return (
        <div
            className={`qualification__content ${activeTab === sectionId ? 'qualification__active' : ''
                }`}
            data-content
            id={sectionId}
        >
            {data.map((item, index) => {
                const isLeft = index % 2 === 0;

                const content = (
                    <div
                        className={item.modalIndex !== undefined ? 'experience' : ''}
                        onClick={() => {
                            if (handleModal && item.modalIndex !== undefined) {
                                handleModal(item.experience_details);
                            }
                        }}
                    >
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">{item.subtitle}</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>
                            {item.year}
                        </div>
                    </div>
                );

                const timeline = (
                    <div>
                        <span className="qualification__rounder"></span>
                        {index < data.length - 1 && (
                            <span className="qualification__line"></span>
                        )}
                    </div>
                );

                return (
                    <div className={`qualification__data ${isLeft ? 'right__align' : 'left__align'}`} key={index}>
                        {isLeft ? (
                            <>
                                {content}
                                {timeline}
                            </>
                        ) : (
                            <>
                                <div></div>
                                {timeline}
                                {content}
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default EducationExperinceCommon;
