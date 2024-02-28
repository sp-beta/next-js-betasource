import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/cloudassess.json";
function CloudAssessmant() {
  return (
    <div>
      <PageHeading
        text="Cloud Assessment and Cost Optimization"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CloudAssessmant
