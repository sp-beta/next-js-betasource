import PageHeading from "@/components/pageheading"
import FAQ from "@/components/faq";
import faqData from "../../../../data/faq/casestudyfaq/iotcasestudy.json";

function InternetOfThings() {
  return (
    <div>
      <PageHeading
        text="Internet Of Things"
        category="Trending Technology"
        categorypath="/services/trending-technology"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

export default InternetOfThings
