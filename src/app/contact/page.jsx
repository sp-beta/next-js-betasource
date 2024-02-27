import PageHeading from "@/components/pageheading";
import ContactForm from "@/components/contactform";
import faqData from "../../data/faq/faqhome.json";
import FAQ from "@/components/faq";
function Contact() {
  return (
    <>
      <PageHeading text="Contact Us" category="Home" categorypath="/" />
      <ContactForm />
      <FAQ faqData={faqData} />
    </>
  );
}

export default Contact;
