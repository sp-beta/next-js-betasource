import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/cloudconsulting.json";
import ServiceLayout from "@/components/servicelayout";
function CloudConsulting() {
  return (
    <div>
      <PageHeading
        text="Cloud Consulting"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CloudConsulting
