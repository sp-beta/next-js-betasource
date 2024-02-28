import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/microservicedev.json";
function MicroServiceArchitecture() {
  return (
    <div>
      <PageHeading
        text="Micro Service Architecture & Development"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default MicroServiceArchitecture
