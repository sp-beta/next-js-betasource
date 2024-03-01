import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../data/faq/cloudservices/cloudservices.json";
import ServiceLayout from "@/components/servicelayout";
function Cloud() {
  return (
    <div>
      <PageHeading
        text="Cloud Services"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default Cloud
