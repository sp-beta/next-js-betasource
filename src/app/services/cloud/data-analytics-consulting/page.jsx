import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/data-analytics.json";
import ServiceLayout from "@/components/servicelayout";
function DataAnalytics() {
  return (
    <div>
      <PageHeading
        text="Data Analytics"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default DataAnalytics
