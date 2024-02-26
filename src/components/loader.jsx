import { loader } from "../../public/mainloader.gif";

import Image from "next/image";
function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <Image src={loader} alt={"logo"} />
      </div>
    </div>
  );
}

export default Loader;
