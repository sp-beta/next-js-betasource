import PageHeading from '@/components/pageheading'
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/devops/devopsconsulting.json";
function DevopsConsulting() {
  return (
    <div>
      <PageHeading
        text="Devops Consulting"
        category="Devops"
        categorypath="/services/devops"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default DevopsConsulting
