import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/data-analytics.json";
function DataAnalytics() {
  return (
    <div>
      <PageHeading
        text="Data Analytics"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default DataAnalytics
