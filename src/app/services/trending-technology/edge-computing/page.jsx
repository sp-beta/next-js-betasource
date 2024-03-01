import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/trendingtech/edgecomputing.json";
import ServiceLayout from "@/components/servicelayout";
function EdgeComputing() {
  return (
    <div>
      <PageHeading
        text="Edge Computing"
        category="Trending Technology"
        categorypath="/services/trending-technology"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}
export default EdgeComputing
