import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/softwaredevfaq/whitelabeldev.json";
function WhiteLabelDev() {
  return (
    <div>
      <PageHeading
        text="White Label Development"
        category="Software Development"
        categorypath="/services/software-development"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default WhiteLabelDev
