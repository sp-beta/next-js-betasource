import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/devops/cicd.json";
import ServiceLayout from "@/components/servicelayout";
function CICD() {
  return (
    <div>
      <PageHeading
        text="CI-CD Services"
        category="Devops"
        categorypath="/services/devops"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CICD
