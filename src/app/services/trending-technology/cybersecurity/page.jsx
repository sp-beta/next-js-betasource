import PageHeading from "@/components/pageheading"

import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/trendingtech/cybersecurity.json";
import ServiceLayout from "@/components/servicelayout";
function CyberSecurity() {
  return (
    <div>
      <PageHeading
        text="Cyber Security"
        category="Trending Technology"
        categorypath="/services/trending-technology"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CyberSecurity
