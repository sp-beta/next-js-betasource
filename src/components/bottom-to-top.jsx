"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function BottomToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // Add event listener to detect scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className= {`bottomtopbtn ${isVisible ? "show" : "hide"}`} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
}
export default BottomToTop;
