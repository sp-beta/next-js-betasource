import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/cloudconsulting.json";
function CloudConsulting() {
  return (
    <div>
      <PageHeading
        text="Cloud Consulting"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CloudConsulting
