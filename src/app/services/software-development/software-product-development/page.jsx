import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/softwaredevfaq/softwareproductdev.json";
function SoftwareProductDev() {
  return (
    <div>
      <PageHeading
        text="Software Product Development"
        category="Software Product Development"
        categorypath="/services/software-development"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default SoftwareProductDev;
