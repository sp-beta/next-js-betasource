import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/softwaredevfaq/mobileappdev.json";
import ServiceLayout from "@/components/servicelayout";
function MobileAppDev() {
  return (
    <div>
      <PageHeading
        text="Mobile Application Development"
        category="Software Development"
        categorypath="/services/software-development"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default MobileAppDev
