import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/microservicedev.json";
import ServiceLayout from "@/components/servicelayout";
function MicroServiceArchitecture() {
  return (
    <div>
      <PageHeading
        text="Micro Service Architecture & Development"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default MicroServiceArchitecture
