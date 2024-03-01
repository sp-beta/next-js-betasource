import PageHeading from '@/components/pageheading';
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/devops/inframanage.json";
import ServiceLayout from "@/components/servicelayout";
function InfrastructureManagementServices() {
  return (
    <div>
      <PageHeading
        text="Infrastructure Management Services"
        category="Devops"
        categorypath="/services/devops"
      />{" "}
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default InfrastructureManagementServices
