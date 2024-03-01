import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/softwaredevfaq/aimldev.json";
import ServiceLayout from "@/components/servicelayout";
function AIMLDev() {
  return (
    <div>
      <PageHeading
        text="AI/ML development"
        category="Software Development"
        categorypath="/services/software-development"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default AIMLDev
