import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/softwaredevfaq/aimldev.json";
function AIMLDev() {
  return (
    <div>
      <PageHeading
        text="AI/ML development"
        category="Software Development"
        categorypath="/services/software-development"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default AIMLDev
