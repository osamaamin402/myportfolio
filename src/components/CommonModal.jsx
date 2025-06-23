export default function CommonModal(props) {

  const title = props.title;
  const msg = props.msg;
  return (
    <div
      className={`services__modal ${props.showModal ? "active-modal" : ""
        }`}
    >
      <div className="services__modal-content">
        <h4 className="services__modal-title">
          {title}
          <br />
        </h4>
        <i
          className="uil uil-times services__modal-close"
          onClick={props.onHide}
        ></i>

        <ul className="services__modal-services grid">
          
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p>{msg}</p>
            </li>
          
        </ul>
      </div>
    </div>
  );
}