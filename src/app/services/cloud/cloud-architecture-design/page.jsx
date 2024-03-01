import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/cloudarchitecture.json";
import ServiceLayout from "@/components/servicelayout";
function CloudArchitecture() {
  return (
    <div>
      <PageHeading
        text="Cloud Architecture Design"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CloudArchitecture;
