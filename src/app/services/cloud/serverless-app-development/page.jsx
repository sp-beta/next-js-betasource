import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/serverlessappdev.json";
function ServerlessApp() {
  return (
    <div>
      <PageHeading
        text="Serverless App Development"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default ServerlessApp
