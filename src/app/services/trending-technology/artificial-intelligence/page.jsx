import PageHeading from "@/components/pageheading";
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/trendingtech/ai.json";
import ServiceLayout from "@/components/servicelayout";
function AI() {
  return (
    <div>
      <PageHeading
        text="Artificial Intelligence"
        category="Trending Technology"
        categorypath="/services/trending-technology"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default AI
