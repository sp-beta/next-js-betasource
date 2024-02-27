import PageHeading from '@/components/pageheading'
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/devops/infracode.json";
function InfrastructureAsCode() {
  return (
    <div>
      <PageHeading
        text="Infrastructure As Code"
        category="Devops"
        categorypath="/services/devops"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default InfrastructureAsCode
