import PageHeading from "@/components/pageheading";
import image from "../../../../public/home/Hardware.webp";
import Image from "next/image";
import BlogMenu from "@/components/blog-menu";
function SingeBlogPage() {
  return (
    <>
      <PageHeading text="Blog category" category="Blog" categorypath="/blog" />
      <div className="container blog-section ">
        <div className="row blogpagehero">
          <div className="col-lg-6 blogpagetitle-container">
            <h1 className="blogpagetitle">
              Ready to Dive Into The World Of Artificial Intelligence? Here Is what you Need. 
            </h1>
            <div className="blogpagedetails">
              <div className="categoryitem software ">Software</div>
              <div className="date">{"12.02.2024"}</div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cardimage">
              <Image src={image} />
            </div>
          </div>
        </div>
      </div>
      <div className="container blogpagecontent">
        <div className="row">
          <div className="col-lg-8">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              iusto architecto! Rerum est, impedit quasi dolore quis repudiandae
              autem facere explicabo. Reiciendis, quo. Corporis delectus nisi
              totam provident aperiam eum iure, quo placeat ex dolores fugit,
              dolor in voluptatem? Culpa exercitationem labore modi earum
              assumenda accusantium, ullam vero iusto aspernatur.
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Facilis id maiores cum repellendus architecto reprehenderit
                obcaecati, iure sed sequi alias, cumque voluptatum!
                Voluptatibus.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                eos accusantium sequi est iure aspernatur eum placeat saepe.
                Cupiditate, maiores. Assumenda incidunt voluptate magnam illo
                aspernatur, omnis molestias. Enim debitis cum adipisci autem
                maiores iusto, est, minima, provident quia esse voluptatem
                dicta. Iure reprehenderit libero velit in minus quos explicabo.
              </p>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae rem eum laboriosam sit ad accusamus fugiat,
                molestiae eaque suscipit doloremque.
              </h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
                porro tempore, illo quia ut impedit voluptatum officia amet
                optio tenetur labore nulla minus fugit atque veritatis
                reprehenderit? Velit, ex debitis.
              </p>
            </div>
          </div>
          <div className="col-lg-4 blog-menu-container">
            <BlogMenu />
          </div>
        </div>
      </div>
      <div className="pagination-section">
        Pagination component
      </div>
    </>  
  );
}

export default SingeBlogPage;
