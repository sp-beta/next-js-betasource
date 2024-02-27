import PageHeading from "@/components/pageheading";
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/softwaredevfaq/customsoftwaredev.json";
function CustomSoftwareDev() {
  return (
    <div>
      <PageHeading
        text="Custom Software Development"
        category="Software Development"
        categorypath="/services/software-development"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CustomSoftwareDev;
