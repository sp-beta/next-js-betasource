import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/cloudmigration.json";
import ServiceLayout from "@/components/servicelayout";
function CloudMigration() {
  return (
    <div>
      <PageHeading
        text="Cloud Migration"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CloudMigration
