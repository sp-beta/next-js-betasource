import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/cloudmigration.json";
function CloudMigration() {
  return (
    <div>
      <PageHeading
        text="Cloud Migration"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CloudMigration
