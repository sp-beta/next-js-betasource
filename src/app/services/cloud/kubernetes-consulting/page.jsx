import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/kubernetes.json";
import ServiceLayout from "@/components/servicelayout";
function KubernetesConsulting() {
  return (
    <div>
      <PageHeading
        text="Kubernetes Consulting"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <ServiceLayout />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default KubernetesConsulting
