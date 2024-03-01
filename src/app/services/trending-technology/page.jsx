import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../data/faq/trendingtech/trendingtech.json";
import ServiceLayout from "@/components/servicelayout";
function TrendingTech() {
  return (
    <div>
      <PageHeading
        text="Trending Technology Services"
        category="Trending Technology"
        categorypath="/services/trending-technology"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default TrendingTech;
