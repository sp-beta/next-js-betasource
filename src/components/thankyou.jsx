import CommonButton from "./commonbutton";
import Image from "next/image";
import thanksimg from "../../public/thanks1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
function ThankYou(props) {
  return (
    <>
      <div className="tint">
        <div className="thanksPage">
          <div className="closebtn" onClick={props.handleClose}>
            <FontAwesomeIcon icon={faClose} />
          </div>
          <div className="container-fluid py-5">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 text-center">
                  <Image
                    src={thanksimg}
                    className="img-fluid"
                    alt="Thanks"
                    title="Thanks"
                  />
                </div>
                <div className="col-lg-6 text-center">
                  <h5>Thanks you for contacting us.</h5>
                  <h6>
                    You will receive an email from us within next 24 hours,
                    requesting your availability for a meeting to take things
                    forward.
                  </h6>
                  <CommonButton href="/" text="Go to Home" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
