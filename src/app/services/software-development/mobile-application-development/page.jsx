import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/softwaredevfaq/mobileappdev.json";
function MobileAppDev() {
  return (
    <div>
      <PageHeading
        text="Mobile Application Development"
        category="Software Development"
        categorypath="/services/software-development"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default MobileAppDev
