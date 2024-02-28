import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/kubernetes.json";
function KubernetesConsulting() {
  return (
    <div>
      <PageHeading
        text="Kubernetes Consulting"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default KubernetesConsulting
