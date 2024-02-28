import Image from "next/image";
import shape from "../../public/faq-shape.webp";
import { FaRegQuestionCircle } from "react-icons/fa";
function FAQ(props) {
  const { description, queanslist } = props.faqData;

  return (
    <>
      <div className="container-fluid faq-section software-faqs mo-px-1 px-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head mb-4">
                <h5 className="small-heading text-white">FAQ</h5>
                <h3 className="text-white">
                  Frequently Asked <span> Question </span>
                </h3>
              </div>
              <p className="text-white">{description}</p>
            </div>
            <div className="col-lg-12">
              <div
                className="accordion accordion-flush pt-4"
                id="tab_container"
              >
                {queanslist.map(({ id, question, answer }) => {
                  return (
                    <div key={id} className="accordion-item">
                      <h2
                        className="accordion-header"
                        id={`flush-heading${id}`}
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${id}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${id}`}
                        >
                          <div className="faq-question">
                            <div>
                              <FaRegQuestionCircle />
                            </div>
                            <div>{question}</div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`flush-heading${id}`}
                        data-bs-parent="#tab_container"
                      >
                        <div className="accordion-body">{answer}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="form-shape">
              <div className="faq-shape-thumb">
                <Image src={shape} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
