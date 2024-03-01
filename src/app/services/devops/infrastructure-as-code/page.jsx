import PageHeading from '@/components/pageheading'
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/devops/infracode.json";
import ServiceLayout from "@/components/servicelayout";
function InfrastructureAsCode() {
  return (
    <div>
      <PageHeading
        text="Infrastructure As Code"
        category="Devops"
        categorypath="/services/devops"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default InfrastructureAsCode
