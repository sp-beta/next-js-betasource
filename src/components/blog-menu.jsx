import Image from "next/image";
import Link from "next/link";
import image from "../../public/home/ai.webp";
function BlogMenu() {
  return (
    <div>
      <div className="blogmenutitle">
        <span>{"What's Hot"}</span>
        <h5>Most Popular</h5>
      </div>

      <div className="most-popular-card">
        <div className="mostpopularimg">
          <Image src={image} />
        </div>
        <Link href="/blog/blogpostname">
          <span className="ai-ml card-category">AI/ML</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis nam similique libero.
          </p>
          <span>03.02.2024</span>
        </Link>
      </div>
      <div className="most-popular-card">
        <div className="mostpopularimg">
          <Image src={image} />
        </div>
        <Link href="/blog/blogpostname">
          <span className="ai-ml card-category">AI/ML</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis nam similique libero.
          </p>
          <span>03.02.2024</span>
        </Link>
      </div>
      <div className="most-popular-card">
        <div className="mostpopularimg">
          <Image src={image} />
        </div>
        <Link href="/blog/blogpostname">
          <span className="ai-ml card-category">AI/ML</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis nam similique libero.
          </p>
          <span>03.02.2024</span>
        </Link>
      </div>

      <div className="blogmenutitle">
        <span>{"Discover By Topic"}</span>
        <h5>Categories</h5>
      </div>
      <div className="category-menu">
        <div className="categoryitem software ">Software</div>

        <div className="categoryitem ai-ml">AI/ML</div>

        <div className="categoryitem devops">DevOps</div>
      </div>
      <div className="category-menu">
        <div className="categoryitem cyber">Cyber Security</div>
        <div className="categoryitem cloud">Cloud</div>

        <div className="categoryitem blockchain">Blockchain</div>
      </div>
    </div>
  );
}

export default BlogMenu;
