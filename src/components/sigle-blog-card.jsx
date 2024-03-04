import Image from "next/image";
import Link from "next/link";
import image from "../../public/home/Hardware.webp";
function SigleBlogCard() {
  return (
    <>
      <div className="row siglecardcontainer">
        <div className="col-lg-6">
          <div className="cardimage">
            <Image src={image} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cardcontent">
            <div className="date-category">
              <span>03.02.2024</span>
              <span className="software card-category">software</span>
            </div>
            <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              saepe nobis quidem officia doloremque quia, beatae alias est
              voluptate corrupti?
            </p>
            <Link href="/blog">Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SigleBlogCard;
