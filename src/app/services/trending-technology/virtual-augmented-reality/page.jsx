import PageHeading from "@/components/pageheading";

import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/trendingtech/vrar.json";
function VirtualAugmented() {
  return (
    <div>
      <PageHeading
        text="Virtual Reality/Augmented Reality"
        category="Trending Technology"
        categorypath="/services/trending-technology"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default VirtualAugmented;
