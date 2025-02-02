import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function CommonButton(props) {
  return (
    <div
      className="text-center rounded-btn mt-4 wow fadeInUp"
      data-wow-delay="2s"
    >
      <Link href={props.href ? props.href : "/"}>
        <div>{props.text}</div>
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
}

export default CommonButton;
