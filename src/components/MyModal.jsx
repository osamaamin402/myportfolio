
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyModal(props) {


  const experience = props.experience;
  const details = experience.details;
  return (
    <div
      className={`services__modal ${props.showModal ? "active-modal" : ""
        }`}
    >
      <div className="services__modal-content">
        <h4 className="services__modal-title">
          {experience.title}
          <br />
        </h4>
        <i
          className="uil uil-times services__modal-close"
          onClick={props.onHide}
        ></i>

        <ul className="services__modal-services grid">
          {details.map((detail, idx) => (
            <li className="services__modal-service" key={idx}>
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p>{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}