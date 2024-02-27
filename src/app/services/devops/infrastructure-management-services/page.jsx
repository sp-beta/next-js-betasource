import PageHeading from '@/components/pageheading';
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/devops/inframanage.json";
function InfrastructureManagementServices() {
  return (
    <div>
      <PageHeading
        text="Infrastructure Management Services"
        category="Devops"
        categorypath="/services/devops"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default InfrastructureManagementServices
