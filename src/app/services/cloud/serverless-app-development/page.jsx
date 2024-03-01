import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/serverlessappdev.json";
import ServiceLayout from "@/components/servicelayout";
function ServerlessApp() {
  return (
    <div>
      <PageHeading
        text="Serverless App Development"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default ServerlessApp
