import PageHeading from '@/components/pageheading'
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/devops/con-orch.json";
function ContainerizationOrchestration() {
  return (
    <div>
      <PageHeading
        text="Containerization & Orchestration"
        category="Devops"
        categorypath="/services/devops"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default ContainerizationOrchestration
