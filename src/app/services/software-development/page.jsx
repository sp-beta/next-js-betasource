import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../data/faq/softwaredevfaq/softwaredev.json";
import ServiceLayout from "@/components/servicelayout";

function SoftwareDev() {
  return (
    <div>
      <PageHeading
        text="Software Development Services"
        category="Software Development"
        categorypath="/services/software-development"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default SoftwareDev
