import PageHeading from '@/components/pageheading'
import FAQ from "@/components/faq";
import faqData from "../../../data/faq/devops/devops.json";
function Devops() {
  return (
    <div>
      <PageHeading
        text="Devops Services"
        category="Devops"
        categorypath="/services/devops"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default Devops
