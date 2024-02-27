import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/devops/cicd.json";
function CICD() {
  return (
    <div>
      <PageHeading
        text="CI-CD Services"
        category="Devops"
        categorypath="/services/devops"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CICD
