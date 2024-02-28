import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/trendingtech/cloud.json";

function CloudComputing() {
  return (
    <div>
      <PageHeading
        text="Cloud Computing"
        category="Trending Technology"
        categorypath="/services/trending-technology"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CloudComputing
