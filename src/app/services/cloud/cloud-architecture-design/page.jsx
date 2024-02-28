import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/cloudservices/cloudarchitecture.json";
function CloudArchitecture() {
  return (
    <div>
      <PageHeading
        text="Cloud Architecture Design"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default CloudArchitecture;
