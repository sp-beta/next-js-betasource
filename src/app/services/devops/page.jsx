import PageHeading from '@/components/pageheading'
import FAQ from "@/components/faq";
import faqData from "../../../data/faq/devops/devops.json";
import ServiceLayout from "@/components/servicelayout";
function Devops() {
  return (
    <div>
      <PageHeading
        text="Devops Services"
        category="Devops"
        categorypath="/services/devops"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default Devops;
