import PageHeading from "@/components/pageheading";
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/softwaredevfaq/customsoftwaredev.json";
import ServiceLayout from "@/components/servicelayout";
function CustomSoftwareDev() {
  return (
    <div>
      <PageHeading
        text="Custom Software Development"
        category="Software Development"
        categorypath="/services/software-development"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CustomSoftwareDev;
