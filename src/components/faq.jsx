import Image from "next/image";
import shape from "../../public/faq-shape.webp";
import { FaRegQuestionCircle } from "react-icons/fa";
function FAQ(props) {
  const { description, queanslist } = props.faqData;

  return (
    <>
      <div class="container-fluid faq-section software-faqs mo-px-1 px-5 py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-head mb-4">
                <h5 class="small-heading text-white">FAQ</h5>
                <h3 class="text-white">
                  Freequently Asked <span> Question </span>
                </h3>
              </div>
              <p class="text-white">{description}</p>
            </div>
            <div class="col-lg-12">
              <div class="accordion accordion-flush pt-4" id="tab_container">
                {queanslist.map(({ id, question, answer }) => {
                  return (
                    <div class="accordion-item">
                      <h2 class="accordion-header" id={`flush-heading${id}`}>
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#flush-collapse${id}`}
                          aria-expanded="false"
                          aria-controls={`flush-collapse${id}`}
                        >
                          <span>
                            <FaRegQuestionCircle />
                            {question}
                          </span>
                        </button>
                      </h2>
                      <div
                        id={`flush-collapse${id}`}
                        class="accordion-collapse collapse"
                        aria-labelledby={`flush-heading${id}`}
                        data-bs-parent="#tab_container"
                      >
                        <div class="accordion-body">{answer}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="form-shape">
              <div class="faq-shape-thumb">
                <Image src={shape} class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
