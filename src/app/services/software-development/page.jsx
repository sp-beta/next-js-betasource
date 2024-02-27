import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../data/faq/softwaredevfaq/softwaredev.json";
function SoftwareDev() {
  return (
    <div>
      <PageHeading
        text="Software Development Services"
        category="Software Development"
        categorypath="/services/software-development"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default SoftwareDev
