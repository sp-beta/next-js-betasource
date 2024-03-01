import PageHeading from '@/components/pageheading'
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/devops/devopsconsulting.json";
import ServiceLayout from "@/components/servicelayout";
function DevopsConsulting() {
  return (
    <div>
      <PageHeading
        text="Devops Consulting"
        category="Devops"
        categorypath="/services/devops"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default DevopsConsulting
