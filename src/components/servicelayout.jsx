import Image from "next/image";
import ComingSoon from "../../public/coming-soon.webp";
export default function ServiceLayout() {
  return (
    <div className="coming-soon">
      <Image src={ComingSoon} alt="Coming Soon" />
    </div>
  );
}
