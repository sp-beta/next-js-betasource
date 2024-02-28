import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/trendingtech/edgecomputing.json";
function EdgeComputing() {
  return (
    <div>
      <PageHeading
        text="Edge Computing"
        category="Trending Technology"
        categorypath="/services/trending-technology"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}
export default EdgeComputing
