import PageHeading from "@/components/pageheading"

import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/trendingtech/cybersecurity.json";
function CyberSecurity() {
  return (
    <div>
      <PageHeading
        text="Cyber Security"
        category="Trending Technology"
        categorypath="/services/trending-technology"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CyberSecurity
