import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../data/faq/cloudservices/cloudservices.json";
function Cloud() {
  return (
    <div>
      <PageHeading
        text="Cloud Services"
        category="Cloud"
        categorypath="/services/cloud"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default Cloud
