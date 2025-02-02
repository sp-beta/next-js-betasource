import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/trendingtech/blockchain.json";
import ServiceLayout from "@/components/servicelayout";

function Blockchain() {
  return (
    <div>
      <PageHeading
        text="Blockchain"
        category="Trending Technology"
        categorypath="/services/trending-technology"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default Blockchain
