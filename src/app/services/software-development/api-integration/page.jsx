import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/softwaredevfaq/apidev.json";
import ServiceLayout from "@/components/servicelayout";
function API() {
  return (
    <div>
      <PageHeading
        text="API Integration"
        category="Software Development"
        categorypath="/services/software-development"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default API
