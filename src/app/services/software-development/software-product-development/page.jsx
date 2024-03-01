import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/softwaredevfaq/softwareproductdev.json";
import ServiceLayout from "@/components/servicelayout";
function SoftwareProductDev() {
  return (
    <div>
      <PageHeading
        text="Software Product Development"
        category="Software Product Development"
        categorypath="/services/software-development"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default SoftwareProductDev;
